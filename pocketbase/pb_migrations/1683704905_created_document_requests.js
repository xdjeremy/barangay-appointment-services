migrate((db) => {
  const collection = new Collection({
    "id": "kzpgfaji9ms9z9r",
    "created": "2023-05-10 07:48:24.939Z",
    "updated": "2023-05-10 07:48:24.939Z",
    "name": "document_requests",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rf2r3szu",
        "name": "document_type",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "barangay_clearance",
            "police_clearance",
            "barangay_id",
            "potsal_id"
          ]
        }
      },
      {
        "system": false,
        "id": "3hfs6kld",
        "name": "user",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("kzpgfaji9ms9z9r");

  return dao.deleteCollection(collection);
})
