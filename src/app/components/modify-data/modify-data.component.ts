import { Component, OnInit } from '@angular/core';
type AnyObj = Record<string, any>;
type ConvertFn = (str: string) => string;
@Component({
  selector: 'app-modify-data',
  templateUrl: './modify-data.component.html',
  styleUrls: ['./modify-data.component.scss']
})

export class ModifyDataComponent implements OnInit {


  data = [
    {
      typeId: 'NoteUpdated',
      actor: 'User',
      actorId: 'dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0',
      context: 'Merchant',
      contextId: 'fc06b373-f1af-4251-acc5-e8c26b5cb970',
      resource: 'Note',
      resourceId: 'd3bedfa3-631a-5624-942d-3a09f5f6dbd6',
      meta: {
        id: 'd3bedfa3-631a-5624-942d-3a09f5f6dbd6',
        leadId: '0b1d2c8e-c9b7-4318-93cd-54f89eb0a841',
        merchant: {
          id: 'fc06b373-f1af-4251-acc5-e8c26b5cb970',
          name: 'Merchant- 8',
        },
        description: '<p>PDF</p>',
        isFavourite: false,
        isPrivate: true,
        isPinned: true,
        privateType: {
          id: '6f3c88d8-030a-4d71-bc22-2768dda82509',
          name: 'Management Only',
        },
        noteAttachments: [
          {
            noteId: 'd3bedfa3-631a-5624-942d-3a09f5f6dbd6',
            documentId: '993cbe96-cd10-e3c3-0d30-3a09f5f6db23',
            fileName: '4 PAGES PDF ORANGE.pdf',
            fileSize: 1578222,
            merchantId: 'fc06b373-f1af-4251-acc5-e8c26b5cb970',
            documentTypeId: '75019320-3f3e-43f9-8b96-55c8e90e6ae4',
          },
          {
            noteId: 'd3bedfa3-631a-5624-942d-3a09f5f6dbd6',
            documentId: 'd5fdede7-8ef9-cbf1-c4b0-3a09f60681c9',
            fileName: 'Screenshot 2023-03-06 at 10.12.05 AM.png',
            fileSize: 236731,
            merchantId: 'fc06b373-f1af-4251-acc5-e8c26b5cb970',
            documentTypeId: '75019320-3f3e-43f9-8b96-55c8e90e6ae4',
          },
          {
            noteId: 'd3bedfa3-631a-5624-942d-3a09f5f6dbd6',
            documentId: 'a5263e64-2deb-eaed-13dc-3a09f60901aa',
            fileName: 'A17_FlightPlan (1)_compressed.pdf',
            fileSize: 7822965,
            merchantId: 'fc06b373-f1af-4251-acc5-e8c26b5cb970',
            documentTypeId: '75019320-3f3e-43f9-8b96-55c8e90e6ae4',
          },
          {
            noteId: 'd3bedfa3-631a-5624-942d-3a09f5f6dbd6',
            documentId: '5f1f45ec-f078-d122-1510-3a09f64ee74e',
            fileName: 'nature_is_love.png',
            fileSize: 503111,
            merchantId: 'fc06b373-f1af-4251-acc5-e8c26b5cb970',
            documentTypeId: '75019320-3f3e-43f9-8b96-55c8e90e6ae4',
          },
        ],
        creator: {
          id: 'dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0',
          name: 'Tejas Patel',
        },
        creationTime: '2023-03-15T05:41:52.7287904',
        lastModifier: {
          id: 'dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0',
          name: 'Tejas Patel',
          camelCase: "Hello"
        },
        lastModificationTime: '2023-03-15T07:18:07.9511004+00:00',
        deleter: null,
        deletionTime: null,
        isDeleted: false,
        undoDeleter: null,
        type: 'NoteUpdated',
        activityTime: '2023-03-15T07:18:07.9519235',
        category: 'note',
      },
      creationTime: '2023-03-15T07:18:07.9519235',
      creatorId: 'dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0',
      id: '37a7c2ba-9504-cb73-f8cc-3a09f64efb4f',
    },
    {
      type: 'NoteUpdated',
      actor: 'User',
      actorId: 'dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0',
      context: 'Merchant',
      contextId: 'fc06b373-f1af-4251-acc5-e8c26b5cb970',
      resource: 'Note',
      resourceId: 'd3bedfa3-631a-5624-942d-3a09f5f6dbd6',
      meta: {
        id: 'd3bedfa3-631a-5624-942d-3a09f5f6dbd6',
        leadId: '0b1d2c8e-c9b7-4318-93cd-54f89eb0a841',
        merchant: {
          id: 'fc06b373-f1af-4251-acc5-e8c26b5cb970',
          name: 'Merchant- 8',
        },
        description: '<p>PDF</p>',
        isFavourite: false,
        isPrivate: true,
        isPinned: false,
        privateType: {
          id: '6f3c88d8-030a-4d71-bc22-2768dda82509',
          name: 'Management Only',
        },
        noteAttachments: [
          {
            noteId: 'd3bedfa3-631a-5624-942d-3a09f5f6dbd6',
            documentId: '993cbe96-cd10-e3c3-0d30-3a09f5f6db23',
            fileName: '4 PAGES PDF ORANGE.pdf',
            fileSize: 1578222,
            merchantId: 'fc06b373-f1af-4251-acc5-e8c26b5cb970',
            documentTypeId: '75019320-3f3e-43f9-8b96-55c8e90e6ae4',
          },
          {
            noteId: 'd3bedfa3-631a-5624-942d-3a09f5f6dbd6',
            documentId: 'd5fdede7-8ef9-cbf1-c4b0-3a09f60681c9',
            fileName: 'Screenshot 2023-03-06 at 10.12.05 AM.png',
            fileSize: 236731,
            merchantId: 'fc06b373-f1af-4251-acc5-e8c26b5cb970',
            documentTypeId: '75019320-3f3e-43f9-8b96-55c8e90e6ae4',
          },
          {
            noteId: 'd3bedfa3-631a-5624-942d-3a09f5f6dbd6',
            documentId: 'a5263e64-2deb-eaed-13dc-3a09f60901aa',
            fileName: 'A17_FlightPlan (1)_compressed.pdf',
            fileSize: 7822965,
            merchantId: 'fc06b373-f1af-4251-acc5-e8c26b5cb970',
            documentTypeId: '75019320-3f3e-43f9-8b96-55c8e90e6ae4',
          },
          {
            noteId: 'd3bedfa3-631a-5624-942d-3a09f5f6dbd6',
            documentId: '5f1f45ec-f078-d122-1510-3a09f64ee74e',
            fileName: 'nature_is_love.png',
            fileSize: 503111,
            merchantId: 'fc06b373-f1af-4251-acc5-e8c26b5cb970',
            documentTypeId: '75019320-3f3e-43f9-8b96-55c8e90e6ae4',
          },
        ],
        creator: {
          id: 'dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0',
          name: 'Tejas Patel',
        },
        creationTime: '2023-03-15T05:41:52.7287904',
        lastModifier: {
          id: 'dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0',
          name: 'Tejas Patel',
        },
        lastModificationTime: '2023-03-15T07:18:03.028372+00:00',
        deleter: null,
        deletionTime: null,
        isDeleted: false,
        undoDeleter: null,
        type: 'NoteUpdated',
        activityTime: '2023-03-15T07:18:03.0430345',
        category: 'note',
      },
      creationTime: '2023-03-15T07:18:03.0430345',
      creatorId: 'dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0',
      id: '0f53779c-7f6e-6a2f-dead-3a09f64ee822',
    },
    {
      type: 'NoteUpdated',
      actor: 'User',
      actorId: 'dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0',
      context: 'Merchant',
      contextId: 'fc06b373-f1af-4251-acc5-e8c26b5cb970',
      resource: 'Note',
      resourceId: 'd3bedfa3-631a-5624-942d-3a09f5f6dbd6',
      meta: {
        id: 'd3bedfa3-631a-5624-942d-3a09f5f6dbd6',
        leadId: '0b1d2c8e-c9b7-4318-93cd-54f89eb0a841',
        merchant: {
          id: 'fc06b373-f1af-4251-acc5-e8c26b5cb970',
          name: 'Merchant- 8',
        },
        description: '<p>PDF</p>',
        isFavourite: false,
        isPrivate: true,
        isPinned: false,
        privateType: {
          id: '6f3c88d8-030a-4d71-bc22-2768dda82509',
          name: 'Management Only',
        },
        noteAttachments: [
          {
            noteId: 'd3bedfa3-631a-5624-942d-3a09f5f6dbd6',
            documentId: '993cbe96-cd10-e3c3-0d30-3a09f5f6db23',
            fileName: '4 PAGES PDF ORANGE.pdf',
            fileSize: 1578222,
            merchantId: 'fc06b373-f1af-4251-acc5-e8c26b5cb970',
            documentTypeId: '75019320-3f3e-43f9-8b96-55c8e90e6ae4',
          },
          {
            noteId: 'd3bedfa3-631a-5624-942d-3a09f5f6dbd6',
            documentId: 'd5fdede7-8ef9-cbf1-c4b0-3a09f60681c9',
            fileName: 'Screenshot 2023-03-06 at 10.12.05 AM.png',
            fileSize: 236731,
            merchantId: 'fc06b373-f1af-4251-acc5-e8c26b5cb970',
            documentTypeId: '75019320-3f3e-43f9-8b96-55c8e90e6ae4',
          },
          {
            noteId: 'd3bedfa3-631a-5624-942d-3a09f5f6dbd6',
            documentId: 'a5263e64-2deb-eaed-13dc-3a09f60901aa',
            fileName: 'A17_FlightPlan (1)_compressed.pdf',
            fileSize: 7822965,
            merchantId: 'fc06b373-f1af-4251-acc5-e8c26b5cb970',
            documentTypeId: '75019320-3f3e-43f9-8b96-55c8e90e6ae4',
          },
        ],
        creator: {
          id: 'dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0',
          name: 'Tejas Patel',
        },
        creationTime: '2023-03-15T05:41:52.7287904',
        lastModifier: {
          id: 'dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0',
          name: 'Tejas Patel',
        },
        lastModificationTime: '2023-03-15T06:01:42.4417569+00:00',
        deleter: null,
        deletionTime: null,
        isDeleted: false,
        undoDeleter: null,
        type: 'NoteUpdated',
        activityTime: '2023-03-15T06:01:42.4478005',
        category: 'note',
      },
      creationTime: '2023-03-15T06:01:42.4478005',
      creatorId: 'dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0',
      id: '3987d60f-b56e-31ff-1b65-3a09f609032f',
    },
    {
      type: 'NoteUpdated',
      actor: 'User',
      actorId: 'dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0',
      context: 'Merchant',
      contextId: 'fc06b373-f1af-4251-acc5-e8c26b5cb970',
      resource: 'Note',
      resourceId: 'd3bedfa3-631a-5624-942d-3a09f5f6dbd6',
      meta: {
        id: 'd3bedfa3-631a-5624-942d-3a09f5f6dbd6',
        leadId: '0b1d2c8e-c9b7-4318-93cd-54f89eb0a841',
        merchant: {
          id: 'fc06b373-f1af-4251-acc5-e8c26b5cb970',
          name: 'Merchant- 8',
        },
        description: '<p>PDF</p>',
        isFavourite: false,
        isPrivate: true,
        isPinned: false,
        privateType: {
          id: '6f3c88d8-030a-4d71-bc22-2768dda82509',
          name: 'Management Only',
        },
        noteAttachments: [
          {
            noteId: 'd3bedfa3-631a-5624-942d-3a09f5f6dbd6',
            documentId: '993cbe96-cd10-e3c3-0d30-3a09f5f6db23',
            fileName: '4 PAGES PDF ORANGE.pdf',
            fileSize: 1578222,
            merchantId: 'fc06b373-f1af-4251-acc5-e8c26b5cb970',
            documentTypeId: '75019320-3f3e-43f9-8b96-55c8e90e6ae4',
          },
          {
            noteId: 'd3bedfa3-631a-5624-942d-3a09f5f6dbd6',
            documentId: 'd5fdede7-8ef9-cbf1-c4b0-3a09f60681c9',
            fileName: 'Screenshot 2023-03-06 at 10.12.05 AM.png',
            fileSize: 236731,
            merchantId: 'fc06b373-f1af-4251-acc5-e8c26b5cb970',
            documentTypeId: '75019320-3f3e-43f9-8b96-55c8e90e6ae4',
          },
        ],
        creator: {
          id: 'dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0',
          name: 'Tejas Patel',
        },
        creationTime: '2023-03-15T05:41:52.7287904',
        lastModifier: {
          id: 'dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0',
          name: 'Tejas Patel',
        },
        lastModificationTime: '2023-03-15T05:58:58.2977978+00:00',
        deleter: null,
        deletionTime: null,
        isDeleted: false,
        undoDeleter: null,
        type: 'NoteUpdated',
        activityTime: '2023-03-15T05:58:58.3059233',
        category: 'note',
      },
      creationTime: '2023-03-15T05:58:58.3059233',
      creatorId: 'dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0',
      id: 'bf2f6207-7d37-9e30-f1d9-3a09f6068201',
    },
    {
      type: 'NoteCreated',
      actor: 'User',
      actorId: 'dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0',
      context: 'Merchant',
      contextId: 'fc06b373-f1af-4251-acc5-e8c26b5cb970',
      resource: 'Note',
      resourceId: 'd3bedfa3-631a-5624-942d-3a09f5f6dbd6',
      meta: {
        id: 'd3bedfa3-631a-5624-942d-3a09f5f6dbd6',
        leadId: '0b1d2c8e-c9b7-4318-93cd-54f89eb0a841',
        merchant: {
          id: 'fc06b373-f1af-4251-acc5-e8c26b5cb970',
          name: 'Merchant- 8',
        },
        description: '<p>PDF</p>',
        isFavourite: false,
        isPrivate: true,
        isPinned: false,
        privateType: {
          id: '6f3c88d8-030a-4d71-bc22-2768dda82509',
          name: 'Management Only',
        },
        noteAttachments: [
          {
            noteId: 'd3bedfa3-631a-5624-942d-3a09f5f6dbd6',
            documentId: '993cbe96-cd10-e3c3-0d30-3a09f5f6db23',
            fileName: '4 PAGES PDF ORANGE.pdf',
            fileSize: 1578222,
            merchantId: 'fc06b373-f1af-4251-acc5-e8c26b5cb970',
            documentTypeId: '75019320-3f3e-43f9-8b96-55c8e90e6ae4',
          },
        ],
        creator: {
          id: 'dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0',
          name: 'Tejas Patel',
        },
        creationTime: '2023-03-15T05:41:52.7287904+00:00',
        lastModifier: null,
        lastModificationTime: null,
        deleter: null,
        deletionTime: null,
        isDeleted: false,
        undoDeleter: null,
        type: 'NoteCreated',
        activityTime: '2023-03-15T05:41:52.7411302',
        category: 'note',
      },
      creationTime: '2023-03-15T05:41:52.7411302',
      creatorId: 'dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0',
      id: '4510faa1-46d7-38fa-2af5-3a09f5f6dbe4',
    },
    {
      type: 'LeadCreated',
      actor: 'User',
      actorId: 'dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0',
      context: 'Merchant',
      contextId: '6df7e3c9-8ae5-48d5-ba1d-24e0fe7a17a4',
      resource: 'Note',
      resourceId: 'e76842b4-ddb7-b14e-85b5-3a09d70f4624',
      meta: {
        id: 'e76842b4-ddb7-b14e-85b5-3a09d70f4624',
        leadId: '0b7a4a38-8b4a-48f1-82a8-1aa50c1512e6',
        title: 'Lead set to No Crunch Reason',
        merchant: {
          id: '6df7e3c9-8ae5-48d5-ba1d-24e0fe7a17a4',
          name: 'Merchant- 2',
        },
        description: 'Unable to provide cheaper pricing',
        eventType: 'User',
        creator: {
          id: 'dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0',
          name: 'Tejas Patel',
        },
        comments: 'Insufficient information provided by merchant',
        creationTime: '2023-03-09T05:40:19.1087605+00:00',
        lastModifier: null,
        lastModificationTime: null,
        type: 'LeadCreated',
        activityTime: '2023-03-08T05:40:19.1137544',
        category: 'common',
      },
      creationTime: '2023-03-08T05:40:19.1137544',
      creatorId: 'dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0',
      id: 'aa9ab988-8abf-e91d-086c-3a09d70f4629',
    },
  ];

  snakeData = [
    {
        "type_id": "NoteUpdated",
        "actor": "User",
        "actor_id": "dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0",
        "context": "Merchant",
        "context_id": "fc06b373-f1af-4251-acc5-e8c26b5cb970",
        "resource": "Note",
        "resource_id": "d3bedfa3-631a-5624-942d-3a09f5f6dbd6",
        "meta": {
            "id": "d3bedfa3-631a-5624-942d-3a09f5f6dbd6",
            "lead_id": "0b1d2c8e-c9b7-4318-93cd-54f89eb0a841",
            "merchant": {
                "id": "fc06b373-f1af-4251-acc5-e8c26b5cb970",
                "name": "Merchant- 8"
            },
            "description": "<p>PDF</p>",
            "is_favourite": false,
            "is_private": true,
            "is_pinned": true,
            "private_type": {
                "id": "6f3c88d8-030a-4d71-bc22-2768dda82509",
                "name": "Management Only"
            },
            "note_attachments": [
                {
                    "note_id": "d3bedfa3-631a-5624-942d-3a09f5f6dbd6",
                    "document_id": "993cbe96-cd10-e3c3-0d30-3a09f5f6db23",
                    "file_name": "4 PAGES PDF ORANGE.pdf",
                    "file_size": 1578222,
                    "merchant_id": "fc06b373-f1af-4251-acc5-e8c26b5cb970",
                    "document_type_id": "75019320-3f3e-43f9-8b96-55c8e90e6ae4"
                },
                {
                    "note_id": "d3bedfa3-631a-5624-942d-3a09f5f6dbd6",
                    "document_id": "d5fdede7-8ef9-cbf1-c4b0-3a09f60681c9",
                    "file_name": "Screenshot 2023-03-06 at 10.12.05 AM.png",
                    "file_size": 236731,
                    "merchant_id": "fc06b373-f1af-4251-acc5-e8c26b5cb970",
                    "document_type_id": "75019320-3f3e-43f9-8b96-55c8e90e6ae4"
                },
                {
                    "note_id": "d3bedfa3-631a-5624-942d-3a09f5f6dbd6",
                    "document_id": "a5263e64-2deb-eaed-13dc-3a09f60901aa",
                    "file_name": "A17_FlightPlan (1)_compressed.pdf",
                    "file_size": 7822965,
                    "merchant_id": "fc06b373-f1af-4251-acc5-e8c26b5cb970",
                    "document_type_id": "75019320-3f3e-43f9-8b96-55c8e90e6ae4"
                },
                {
                    "note_id": "d3bedfa3-631a-5624-942d-3a09f5f6dbd6",
                    "document_id": "5f1f45ec-f078-d122-1510-3a09f64ee74e",
                    "file_name": "nature_is_love.png",
                    "file_size": 503111,
                    "merchant_id": "fc06b373-f1af-4251-acc5-e8c26b5cb970",
                    "document_type_id": "75019320-3f3e-43f9-8b96-55c8e90e6ae4"
                }
            ],
            "creator": {
                "id": "dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0",
                "name": "Tejas Patel"
            },
            "creation_time": "2023-03-15T05:41:52.7287904",
            "last_modifier": {
                "id": "dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0",
                "name": "Tejas Patel",
                "camel_case": "Hello"
            },
            "last_modification_time": "2023-03-15T07:18:07.9511004+00:00",
            "deleter": null,
            "deletion_time": null,
            "is_deleted": false,
            "undo_deleter": null,
            "type": "NoteUpdated",
            "activity_time": "2023-03-15T07:18:07.9519235",
            "category": "note"
        },
        "creation_time": "2023-03-15T07:18:07.9519235",
        "creator_id": "dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0",
        "id": "37a7c2ba-9504-cb73-f8cc-3a09f64efb4f"
    },
    {
        "type": "NoteUpdated",
        "actor": "User",
        "actor_id": "dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0",
        "context": "Merchant",
        "context_id": "fc06b373-f1af-4251-acc5-e8c26b5cb970",
        "resource": "Note",
        "resource_id": "d3bedfa3-631a-5624-942d-3a09f5f6dbd6",
        "meta": {
            "id": "d3bedfa3-631a-5624-942d-3a09f5f6dbd6",
            "lead_id": "0b1d2c8e-c9b7-4318-93cd-54f89eb0a841",
            "merchant": {
                "id": "fc06b373-f1af-4251-acc5-e8c26b5cb970",
                "name": "Merchant- 8"
            },
            "description": "<p>PDF</p>",
            "is_favourite": false,
            "is_private": true,
            "is_pinned": false,
            "private_type": {
                "id": "6f3c88d8-030a-4d71-bc22-2768dda82509",
                "name": "Management Only"
            },
            "note_attachments": [
                {
                    "note_id": "d3bedfa3-631a-5624-942d-3a09f5f6dbd6",
                    "document_id": "993cbe96-cd10-e3c3-0d30-3a09f5f6db23",
                    "file_name": "4 PAGES PDF ORANGE.pdf",
                    "file_size": 1578222,
                    "merchant_id": "fc06b373-f1af-4251-acc5-e8c26b5cb970",
                    "document_type_id": "75019320-3f3e-43f9-8b96-55c8e90e6ae4"
                },
                {
                    "note_id": "d3bedfa3-631a-5624-942d-3a09f5f6dbd6",
                    "document_id": "d5fdede7-8ef9-cbf1-c4b0-3a09f60681c9",
                    "file_name": "Screenshot 2023-03-06 at 10.12.05 AM.png",
                    "file_size": 236731,
                    "merchant_id": "fc06b373-f1af-4251-acc5-e8c26b5cb970",
                    "document_type_id": "75019320-3f3e-43f9-8b96-55c8e90e6ae4"
                },
                {
                    "note_id": "d3bedfa3-631a-5624-942d-3a09f5f6dbd6",
                    "document_id": "a5263e64-2deb-eaed-13dc-3a09f60901aa",
                    "file_name": "A17_FlightPlan (1)_compressed.pdf",
                    "file_size": 7822965,
                    "merchant_id": "fc06b373-f1af-4251-acc5-e8c26b5cb970",
                    "document_type_id": "75019320-3f3e-43f9-8b96-55c8e90e6ae4"
                },
                {
                    "note_id": "d3bedfa3-631a-5624-942d-3a09f5f6dbd6",
                    "document_id": "5f1f45ec-f078-d122-1510-3a09f64ee74e",
                    "file_name": "nature_is_love.png",
                    "file_size": 503111,
                    "merchant_id": "fc06b373-f1af-4251-acc5-e8c26b5cb970",
                    "document_type_id": "75019320-3f3e-43f9-8b96-55c8e90e6ae4"
                }
            ],
            "creator": {
                "id": "dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0",
                "name": "Tejas Patel"
            },
            "creation_time": "2023-03-15T05:41:52.7287904",
            "last_modifier": {
                "id": "dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0",
                "name": "Tejas Patel"
            },
            "last_modification_time": "2023-03-15T07:18:03.028372+00:00",
            "deleter": null,
            "deletion_time": null,
            "is_deleted": false,
            "undo_deleter": null,
            "type": "NoteUpdated",
            "activity_time": "2023-03-15T07:18:03.0430345",
            "category": "note"
        },
        "creation_time": "2023-03-15T07:18:03.0430345",
        "creator_id": "dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0",
        "id": "0f53779c-7f6e-6a2f-dead-3a09f64ee822"
    },
    {
        "type": "NoteUpdated",
        "actor": "User",
        "actor_id": "dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0",
        "context": "Merchant",
        "context_id": "fc06b373-f1af-4251-acc5-e8c26b5cb970",
        "resource": "Note",
        "resource_id": "d3bedfa3-631a-5624-942d-3a09f5f6dbd6",
        "meta": {
            "id": "d3bedfa3-631a-5624-942d-3a09f5f6dbd6",
            "lead_id": "0b1d2c8e-c9b7-4318-93cd-54f89eb0a841",
            "merchant": {
                "id": "fc06b373-f1af-4251-acc5-e8c26b5cb970",
                "name": "Merchant- 8"
            },
            "description": "<p>PDF</p>",
            "is_favourite": false,
            "is_private": true,
            "is_pinned": false,
            "private_type": {
                "id": "6f3c88d8-030a-4d71-bc22-2768dda82509",
                "name": "Management Only"
            },
            "note_attachments": [
                {
                    "note_id": "d3bedfa3-631a-5624-942d-3a09f5f6dbd6",
                    "document_id": "993cbe96-cd10-e3c3-0d30-3a09f5f6db23",
                    "file_name": "4 PAGES PDF ORANGE.pdf",
                    "file_size": 1578222,
                    "merchant_id": "fc06b373-f1af-4251-acc5-e8c26b5cb970",
                    "document_type_id": "75019320-3f3e-43f9-8b96-55c8e90e6ae4"
                },
                {
                    "note_id": "d3bedfa3-631a-5624-942d-3a09f5f6dbd6",
                    "document_id": "d5fdede7-8ef9-cbf1-c4b0-3a09f60681c9",
                    "file_name": "Screenshot 2023-03-06 at 10.12.05 AM.png",
                    "file_size": 236731,
                    "merchant_id": "fc06b373-f1af-4251-acc5-e8c26b5cb970",
                    "document_type_id": "75019320-3f3e-43f9-8b96-55c8e90e6ae4"
                },
                {
                    "note_id": "d3bedfa3-631a-5624-942d-3a09f5f6dbd6",
                    "document_id": "a5263e64-2deb-eaed-13dc-3a09f60901aa",
                    "file_name": "A17_FlightPlan (1)_compressed.pdf",
                    "file_size": 7822965,
                    "merchant_id": "fc06b373-f1af-4251-acc5-e8c26b5cb970",
                    "document_type_id": "75019320-3f3e-43f9-8b96-55c8e90e6ae4"
                }
            ],
            "creator": {
                "id": "dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0",
                "name": "Tejas Patel"
            },
            "creation_time": "2023-03-15T05:41:52.7287904",
            "last_modifier": {
                "id": "dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0",
                "name": "Tejas Patel"
            },
            "last_modification_time": "2023-03-15T06:01:42.4417569+00:00",
            "deleter": null,
            "deletion_time": null,
            "is_deleted": false,
            "undo_deleter": null,
            "type": "NoteUpdated",
            "activity_time": "2023-03-15T06:01:42.4478005",
            "category": "note"
        },
        "creation_time": "2023-03-15T06:01:42.4478005",
        "creator_id": "dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0",
        "id": "3987d60f-b56e-31ff-1b65-3a09f609032f"
    },
    {
        "type": "NoteUpdated",
        "actor": "User",
        "actor_id": "dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0",
        "context": "Merchant",
        "context_id": "fc06b373-f1af-4251-acc5-e8c26b5cb970",
        "resource": "Note",
        "resource_id": "d3bedfa3-631a-5624-942d-3a09f5f6dbd6",
        "meta": {
            "id": "d3bedfa3-631a-5624-942d-3a09f5f6dbd6",
            "lead_id": "0b1d2c8e-c9b7-4318-93cd-54f89eb0a841",
            "merchant": {
                "id": "fc06b373-f1af-4251-acc5-e8c26b5cb970",
                "name": "Merchant- 8"
            },
            "description": "<p>PDF</p>",
            "is_favourite": false,
            "is_private": true,
            "is_pinned": false,
            "private_type": {
                "id": "6f3c88d8-030a-4d71-bc22-2768dda82509",
                "name": "Management Only"
            },
            "note_attachments": [
                {
                    "note_id": "d3bedfa3-631a-5624-942d-3a09f5f6dbd6",
                    "document_id": "993cbe96-cd10-e3c3-0d30-3a09f5f6db23",
                    "file_name": "4 PAGES PDF ORANGE.pdf",
                    "file_size": 1578222,
                    "merchant_id": "fc06b373-f1af-4251-acc5-e8c26b5cb970",
                    "document_type_id": "75019320-3f3e-43f9-8b96-55c8e90e6ae4"
                },
                {
                    "note_id": "d3bedfa3-631a-5624-942d-3a09f5f6dbd6",
                    "document_id": "d5fdede7-8ef9-cbf1-c4b0-3a09f60681c9",
                    "file_name": "Screenshot 2023-03-06 at 10.12.05 AM.png",
                    "file_size": 236731,
                    "merchant_id": "fc06b373-f1af-4251-acc5-e8c26b5cb970",
                    "document_type_id": "75019320-3f3e-43f9-8b96-55c8e90e6ae4"
                }
            ],
            "creator": {
                "id": "dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0",
                "name": "Tejas Patel"
            },
            "creation_time": "2023-03-15T05:41:52.7287904",
            "last_modifier": {
                "id": "dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0",
                "name": "Tejas Patel"
            },
            "last_modification_time": "2023-03-15T05:58:58.2977978+00:00",
            "deleter": null,
            "deletion_time": null,
            "is_deleted": false,
            "undo_deleter": null,
            "type": "NoteUpdated",
            "activity_time": "2023-03-15T05:58:58.3059233",
            "category": "note"
        },
        "creation_time": "2023-03-15T05:58:58.3059233",
        "creator_id": "dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0",
        "id": "bf2f6207-7d37-9e30-f1d9-3a09f6068201"
    },
    {
        "type": "NoteCreated",
        "actor": "User",
        "actor_id": "dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0",
        "context": "Merchant",
        "context_id": "fc06b373-f1af-4251-acc5-e8c26b5cb970",
        "resource": "Note",
        "resource_id": "d3bedfa3-631a-5624-942d-3a09f5f6dbd6",
        "meta": {
            "id": "d3bedfa3-631a-5624-942d-3a09f5f6dbd6",
            "lead_id": "0b1d2c8e-c9b7-4318-93cd-54f89eb0a841",
            "merchant": {
                "id": "fc06b373-f1af-4251-acc5-e8c26b5cb970",
                "name": "Merchant- 8"
            },
            "description": "<p>PDF</p>",
            "is_favourite": false,
            "is_private": true,
            "is_pinned": false,
            "private_type": {
                "id": "6f3c88d8-030a-4d71-bc22-2768dda82509",
                "name": "Management Only"
            },
            "note_attachments": [
                {
                    "note_id": "d3bedfa3-631a-5624-942d-3a09f5f6dbd6",
                    "document_id": "993cbe96-cd10-e3c3-0d30-3a09f5f6db23",
                    "file_name": "4 PAGES PDF ORANGE.pdf",
                    "file_size": 1578222,
                    "merchant_id": "fc06b373-f1af-4251-acc5-e8c26b5cb970",
                    "document_type_id": "75019320-3f3e-43f9-8b96-55c8e90e6ae4"
                }
            ],
            "creator": {
                "id": "dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0",
                "name": "Tejas Patel"
            },
            "creation_time": "2023-03-15T05:41:52.7287904+00:00",
            "last_modifier": null,
            "last_modification_time": null,
            "deleter": null,
            "deletion_time": null,
            "is_deleted": false,
            "undo_deleter": null,
            "type": "NoteCreated",
            "activity_time": "2023-03-15T05:41:52.7411302",
            "category": "note"
        },
        "creation_time": "2023-03-15T05:41:52.7411302",
        "creator_id": "dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0",
        "id": "4510faa1-46d7-38fa-2af5-3a09f5f6dbe4"
    },
    {
        "type": "LeadCreated",
        "actor": "User",
        "actor_id": "dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0",
        "context": "Merchant",
        "context_id": "6df7e3c9-8ae5-48d5-ba1d-24e0fe7a17a4",
        "resource": "Note",
        "resource_id": "e76842b4-ddb7-b14e-85b5-3a09d70f4624",
        "meta": {
            "id": "e76842b4-ddb7-b14e-85b5-3a09d70f4624",
            "lead_id": "0b7a4a38-8b4a-48f1-82a8-1aa50c1512e6",
            "title": "Lead set to No Crunch Reason",
            "merchant": {
                "id": "6df7e3c9-8ae5-48d5-ba1d-24e0fe7a17a4",
                "name": "Merchant- 2"
            },
            "description": "Unable to provide cheaper pricing",
            "event_type": "User",
            "creator": {
                "id": "dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0",
                "name": "Tejas Patel"
            },
            "comments": "Insufficient information provided by merchant",
            "creation_time": "2023-03-09T05:40:19.1087605+00:00",
            "last_modifier": null,
            "last_modification_time": null,
            "type": "LeadCreated",
            "activity_time": "2023-03-08T05:40:19.1137544",
            "category": "common"
        },
        "creation_time": "2023-03-08T05:40:19.1137544",
        "creator_id": "dffec0d5-a7f1-d24c-e4dd-3a06f810d1d0",
        "id": "aa9ab988-8abf-e91d-086c-3a09d70f4629"
    }
]
  constructor() {
    
    // console.log('this.camelToSnake(data)) :>> ', this.data.map(this.camelToSnake));

    // console.log('this.snakeToCamel(this.data) :>> ', this.snakeToCamel(this.snakeData));
  }

  ngOnInit(): void {
    const camel = this.convertCase(this.snakeData,'camel');
    console.log('camel :>> ', camel);
    const snake = this.convertCase(this.data,'snake');
    console.log('snake :>> ', snake);
    // const objCamel = this.snakeData.map(v=> this.convertCase(v,'camel'));
    // console.log('objCamel :>> ', objCamel);
    // const objSnake = this.data.map(v=> this.convertCase(v, 'snake'));
    // console.log('objSnake :>> ', objSnake);
  }

  // camelToSnake = (obj: any): any =>
  //   Object.fromEntries(
  //     Object.entries(obj).map(([k, v]) => [
  //       k.replace(/[A-Z]/g, c => `_${c.toLowerCase()}`),
  //       v && typeof v === 'object' ? Array.isArray(v) ? v.map(this.camelToSnake) : this.camelToSnake(v) : v
  //     ])
  //   );

  // snakeToCamel(val: any): any {
  //   if (Array.isArray(val)) return val.map(v => this.snakeToCamel(v));
  //   if (val !== null && typeof val === 'object') {
  //     return Object.entries(val).reduce((acc, [k, v]) => ({
  //       ...acc,
  //       [k.replace(/_([a-z])/g, g => g[1].toUpperCase())]: this.snakeToCamel(v)
  //     }), {});
  //   }
  //   return val;
  // }
  
  convertCase<T extends AnyObj>(obj: T, convertTo: 'snake' | 'camel'): T {
    const toSnakeCase: ConvertFn = (str) =>
      str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
    const toCamelCase: ConvertFn = (str) =>
      str.replace(/([-_]\w)/g, (g) => g[1].toUpperCase());
    const convertKeys = (obj: AnyObj, convertFn: ConvertFn): AnyObj => {
      if (Array.isArray(obj)) {
        return obj.map((value) => convertKeys(value, convertFn));
      } else if (typeof obj === 'object' && obj !== null) {
        return Object.keys(obj).reduce((acc: any, key) => {
          acc[convertFn(key)] = convertKeys(obj[key], convertFn);
          return acc;
        }, {});
      }
      return obj;
    };
    if (convertTo === 'snake') {
      return convertKeys(obj, toSnakeCase) as T;
    } else if (convertTo === 'camel') {
      return convertKeys(obj, toCamelCase) as T;
    }
    return obj;
  }
}
