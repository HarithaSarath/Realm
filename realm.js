import Realm from 'realm';

class Contact extends Realm.Object {}

Contact.schema = {
    name: "Contact",
    properties: {
        recordID: 'int',
        givenName: 'string',
        familyName: 'string',
        phoneNumber: 'string'
    },
    primaryKey:"recordID",
};

let realm = new Realm ({schema:[Contact], schemaVersion: 4});

let getAllContacts = ()=> {
    return realm.objects("Contact");
}
let addContact = (_recordID, _givenName, _familyName, _phoneNumber) => {
    realm.write(()=>{
        const contact = realm.create("Contact",{
            recordID: _recordID,
            givenName: _givenName,
            familyName: _familyName,
            phoneNumber: _phoneNumber
        });
    })
}

//let deleteAllContact = () => {
let deleteAllContact = id => {
    realm.write(() => {
        //realm.deleteAll()
        const del = realm.objects("Contact").filtered("recordID == recordID");
        const spe = realm.objects("Contact").filter(userObj => userObj.recordID === id);
        realm.delete(spe);
    })
}
export default realm;

export{
    getAllContacts, addContact, deleteAllContact
}




// import Realm from "realm";

// class Contact extends Realm.Object { }
// Contact.schema = {
//     name: "Contact",
//     properties: {
//         recordID: "string",
//         uid: "string?",
//         thumbnailPath: "string",
//         givenName: "string",
//         familyName: "string",
//         hasThumbnail: {type: "bool", default: false},
//         phoneNumber: "string",
//     },
//     primaryKey: "recordID",
// };

// export default new Realm({ schema: [Contact] });