import fetch from 'isomorphic-fetch'
import { parseString } from 'xml2js'
import XMLprocessors from 'xml2js/lib/processors'

export const validateTicket = (casServer, serviceUrl, ticket) => new Promise((resolve, reject) => {
  fetch(`${casServer}/serviceValidate?service=${serviceUrl}&ticket=${ticket}`)
  .then(resp => resp.text())
    .then((xml) => {
      parseString(xml, {
        trim: true,
        normalize: true,
        explicitArray: false,
        tagNameProcessors: [XMLprocessors.normalize, XMLprocessors.stripPrefix],
      }, (err, result) => {
        if (err) {
          reject(new Error('Response from CAS server was bad.'))
        }
        try {
          const failure = result.serviceresponse.authenticationfailure
          if (failure) {
            reject(new Error(`CAS authentication failed ${failure.$.code}.`))
            return
          }
          const success = result.serviceresponse.authenticationsuccess
          if (success) {
            resolve(success)
          } else {
            reject(new Error('CAS authentication failed.'))
          }
        } catch (error) {
          console.log(error)
          reject(new Error('CAS authentication failed.'))
        }
      })
    })
})

export const CAS = 'cas'
