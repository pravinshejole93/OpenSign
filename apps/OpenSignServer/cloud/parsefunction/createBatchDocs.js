import axios from 'axios';

const serverUrl = process.env.SERVER_URL;
const appId = process.env.APP_ID;

async function sendMail(document, sessionToken) {
  const baseUrl = new URL(process.env.PUBLIC_URL);

  // console.log("pdfDetails", pdfDetails);
  const timeToCompleteDays = document?.TimeToCompleteDays || 15;
  const ExpireDate = new Date(document.createdAt);
  ExpireDate.setDate(ExpireDate.getDate() + timeToCompleteDays);
  const newDate = ExpireDate;
  const localExpireDate = newDate.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const sender = document.ExtUserPtr.Email;
  let signerMail = document.Placeholders;

  if (document.SendinOrder) {
    signerMail = signerMail.slice();
    signerMail.splice(1);
  }
  for (let i = 0; i < signerMail.length; i++) {
    try {
      const imgPng = 'https://qikinnovation.ams3.digitaloceanspaces.com/logo.png';
      let url = `${serverUrl}/functions/sendmailv3`;
      const headers = {
        'Content-Type': 'application/json',
        'X-Parse-Application-Id': appId,
        sessionToken: sessionToken,
      };
      const objectId = signerMail[i]?.signerObjId;
      const hostUrl = baseUrl.origin;
      let encodeBase64;
      if (objectId) {
        encodeBase64 = btoa(`${document.objectId}/${signerMail[i].signerPtr.Email}/${objectId}`);
      } else {
        encodeBase64 = btoa(`${document.objectId}/${signerMail[i].email}`);
      }
      let signPdf = `${hostUrl}/login/${encodeBase64}`;
      const openSignUrl = 'https://www.opensignlabs.com/';
      const orgName = document.ExtUserPtr.Company ? document.ExtUserPtr.Company : '';
      const themeBGcolor = '#47a3ad';
      let params = {
        extUserId: document.ExtUserPtr.objectId,
        recipient: objectId ? signerMail[i].signerPtr.Email : signerMail[i].email,
        subject: `${document.ExtUserPtr.Name} has requested you to sign "${document.Name}"`,
        mailProvider: document?.ExtUserPtr?.active_mail_adapter || '',
        from: sender,
        html:
          "<html><head><meta http-equiv='Content-Type' content='text/html; charset=UTF-8' /> </head>   <body> <div style='background-color: #f5f5f5; padding: 20px'> <div style='box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;background: white;padding-bottom: 20px;'> <div style='padding:10px 10px 0 10px'><img src='" +
          imgPng +
          "' height='50' style='padding:20px; width:170px; height:40px;' /></div><div style='padding: 2px;font-family: system-ui;background-color:" +
          themeBGcolor +
          ";'><p style='font-size: 20px;font-weight: 400;color: white;padding-left: 20px;' > Digital Signature Request</p></div><div><p style='padding: 20px;font-family: system-ui;font-size: 14px; margin-bottom: 10px;'> " +
          document.ExtUserPtr.Name +
          ' has requested you to review and sign <strong> ' +
          document.Name +
          "</strong>.</p><div style='padding: 5px 0px 5px 25px;display: flex;flex-direction: row;justify-content: space-around;'><table> <tr> <td style='font-weight:bold;font-family:sans-serif;font-size:15px'>Sender</td> <td> </td> <td  style='color:#626363;font-weight:bold'>" +
          sender +
          "</td></tr><tr><td style='font-weight:bold;font-family:sans-serif;font-size:15px'>Organization</td> <td> </td><td style='color:#626363;font-weight:bold'> " +
          orgName +
          "</td></tr> <tr> <td style='font-weight:bold;font-family:sans-serif;font-size:15px'>Expires on</td><td> </td> <td style='color:#626363;font-weight:bold'>" +
          localExpireDate +
          "</td></tr><tr> <td></td> <td> </td></tr></table> </div> <div style='margin-left:70px'><a href=" +
          signPdf +
          "> <button style='padding: 12px 12px 12px 12px;background-color: #d46b0f;color: white;  border: 0px;box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;font-weight:bold;margin-top:30px;'>Sign here</button></a> </div> <div style='display: flex; justify-content: center;margin-top: 10px;'> </div></div></div><div><p> This is an automated email from OpenSign™. For any queries regarding this email, please contact the sender " +
          sender +
          ' directly.If you think this email is inappropriate or spam, you may file a complaint with OpenSign™   <a href=' +
          openSignUrl +
          ' target=_blank>here</a>.</p> </div></div></body> </html>',
      };
      const sendMail = await axios.post(url, params, { headers: headers });
      // if (sendMail.data.result.status === 'success') {
      //   console.log('batch login mail sent');
      // }
    } catch (error) {
      console.log('error', error);
    }
  }
}
export default async function createBatchDocs(request) {
  const strDocuments = request.params.Documents;
  const sessionToken = request.headers['sessiontoken'];
  const Documents = JSON.parse(strDocuments);
  const Ip = request?.headers?.['x-real-ip'] || '';
  // console.log('Documents ', Documents);
  const parseConfig = {
    baseURL: serverUrl, //localStorage.getItem('baseUrl'),
    headers: {
      'X-Parse-Application-Id': appId,
      'X-Parse-Session-Token': sessionToken,
      'Content-Type': 'application/json',
    },
  };
  try {
    const requests = Documents.map(x => {
      const Signers = x.Signers;
      const allSigner = x?.Placeholders?.map(
        item => Signers?.find(e => item?.signerPtr?.objectId === e?.objectId) || item?.signerPtr
      ).filter(signer => Object.keys(signer).length > 0);
      const date = new Date();
      const isoDate = date.toISOString();
      let Acl = { [x.CreatedBy.objectId]: { read: true, write: true } };
      if (allSigner && allSigner.length > 0) {
        allSigner.forEach(x => {
          const obj = { [x.CreatedBy.objectId]: { read: true, write: true } };
          Acl = { ...Acl, ...obj };
        });
      }
      return {
        method: 'POST',
        path: '/app/classes/contracts_Document',
        body: {
          Name: x.Name,
          URL: x.URL,
          Note: x.Note,
          Description: x.Description,
          CreatedBy: x.CreatedBy,
          SendinOrder: x.SendinOrder || true,
          ExtUserPtr: {
            __type: 'Pointer',
            className: x.ExtUserPtr.className,
            objectId: x.ExtUserPtr.objectId,
          },
          Placeholders: x.Placeholders.map(y =>
            y?.signerPtr?.objectId
              ? {
                  ...y,
                  signerPtr: {
                    __type: 'Pointer',
                    className: 'contracts_Contactbook',
                    objectId: y.signerPtr.objectId,
                  },
                  signerObjId: y.signerObjId,
                }
              : { ...y, signerPtr: {}, signerObjId: '' }
          ),
          SignedUrl: x.URL || x.SignedUrl,
          Signers: allSigner?.map(y => ({
            __type: 'Pointer',
            className: 'contracts_Contactbook',
            objectId: y.objectId,
          })),
          ACL: Acl,
          RemindOnceInEvery: x.RemindOnceInEvery || 5,
          AutomaticReminders: x.AutomaticReminders || false,
          TimeToCompleteDays: x.TimeToCompleteDays || 15,
          OriginIp: Ip,
          DocSentAt: { __type: 'Date', iso: isoDate },
        },
      };
    });
    // console.log('requests ', requests);

    const response = await axios.post('batch', { requests: requests }, parseConfig);
    // // Handle the batch query response
    // console.log('Batch query response:', response.data);
    if (response.data && response.data.length > 0) {
      const updateDocuments = Documents.map((x, i) => ({
        ...x,
        objectId: response.data[i]?.success?.objectId,
        createdAt: response.data[i]?.success?.createdAt,
      }));
      for (let i = 0; i < updateDocuments.length; i++) {
        sendMail(updateDocuments[i], sessionToken);
      }
      return 'success';
    }

    // Handle individual responses within response.data.results
  } catch (error) {
    console.error('Error performing batch query:', error);
  }
}
