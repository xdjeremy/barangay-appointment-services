migrate((db) => {
  const collection = new Collection({
    "id": "7aq2qxxirrlelde",
    "created": "2023-05-10 09:07:57.475Z",
    "updated": "2023-05-10 09:07:57.475Z",
    "name": "appointments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cyxxsgs7",
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
      },
      {
        "system": false,
        "id": "vofazy9p",
        "name": "appoint_type",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "barangay_captain",
            "barangay_secretatary",
            "barangay_treasurer",
            "barangay_councilor",
            "sk_chairman"
          ]
        }
      },
      {
        "system": false,
        "id": "voyfr3mf",
        "name": "appointment_date",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
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
  const collection = dao.findCollectionByNameOrId("7aq2qxxirrlelde");

  return dao.deleteCollection(collection);
})
