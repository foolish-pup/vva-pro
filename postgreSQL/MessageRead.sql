/*
 Navicat Premium Data Transfer

 Source Server         : postgres
 Source Server Type    : PostgreSQL
 Source Server Version : 170002
 Source Host           : localhost:5432
 Source Catalog        : vva-api
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 170002
 File Encoding         : 65001

 Date: 24/01/2025 16:15:43
*/


-- ----------------------------
-- Table structure for MessageRead
-- ----------------------------
DROP TABLE IF EXISTS "public"."MessageRead";
CREATE TABLE "public"."MessageRead" (
  "id" text COLLATE "pg_catalog"."default" NOT NULL,
  "messageId" text COLLATE "pg_catalog"."default" NOT NULL,
  "userId" text COLLATE "pg_catalog"."default" NOT NULL,
  "createdAt" timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
)
;

-- ----------------------------
-- Records of MessageRead
-- ----------------------------
INSERT INTO "public"."MessageRead" VALUES ('c218f953-87f2-4cc9-a552-e80a64b2ebfa', '2215f10b-ca4f-4a73-b78b-a14a6ae4d52f', 'ea35984a-34f6-4da3-9f50-314f4b719ea6', '2024-09-04 05:53:47.778');
INSERT INTO "public"."MessageRead" VALUES ('472116d6-5059-4201-9d09-420d17b3f49f', 'e9016a44-3ef8-4cac-8dcd-881a74559fba', 'ea35984a-34f6-4da3-9f50-314f4b719ea6', '2024-09-04 05:54:33.608');
INSERT INTO "public"."MessageRead" VALUES ('705a6c64-eee9-4e3c-b867-b4fbfb87d854', 'e9016a44-3ef8-4cac-8dcd-881a74559fba', 'b485e3c1-0790-4007-adef-849537c291f5', '2024-09-04 05:56:20.796');
INSERT INTO "public"."MessageRead" VALUES ('e762f6f0-8f3c-4769-8505-21b9772e0989', 'e9016a44-3ef8-4cac-8dcd-881a74559fba', 'bf9c32dc-2363-4a31-9e7f-74544f7d04a4', '2024-09-04 06:05:15.354');
INSERT INTO "public"."MessageRead" VALUES ('dafa0711-0e2f-480c-957a-ad2bebc03a80', 'e9016a44-3ef8-4cac-8dcd-881a74559fba', 'c698c8e8-3aa0-4dec-b1cd-7d37660d1519', '2024-09-04 06:13:22.907');
INSERT INTO "public"."MessageRead" VALUES ('4f3d2cd5-0b90-4871-bc29-b634494fdb2e', '3ee060d0-7975-4cd5-bb7d-4f884d7824ba', 'c698c8e8-3aa0-4dec-b1cd-7d37660d1519', '2024-09-04 06:16:08.858');
INSERT INTO "public"."MessageRead" VALUES ('3e5ca7b4-f6bc-4fc1-a33d-96a9ba76fb4c', '2215f10b-ca4f-4a73-b78b-a14a6ae4d52f', 'ba54e74c-86cb-4bfa-a0bc-71813175de9e', '2024-09-04 06:27:34.042');
INSERT INTO "public"."MessageRead" VALUES ('239e152f-eb37-4e8b-a1e1-fb216b57c6af', '2215f10b-ca4f-4a73-b78b-a14a6ae4d52f', 'b485e3c1-0790-4007-adef-849537c291f5', '2024-09-04 06:49:39.364');
INSERT INTO "public"."MessageRead" VALUES ('e9927102-4ead-4994-88e6-9627f06fe894', '2215f10b-ca4f-4a73-b78b-a14a6ae4d52f', 'b62c0c5a-ac9f-4d7d-863c-fbfa148bbc4c', '2024-09-04 06:49:59.016');
INSERT INTO "public"."MessageRead" VALUES ('1494516c-5193-4e4f-9f0e-c60493054581', '2215f10b-ca4f-4a73-b78b-a14a6ae4d52f', 'bf9c32dc-2363-4a31-9e7f-74544f7d04a4', '2024-09-04 06:50:13.943');
INSERT INTO "public"."MessageRead" VALUES ('c88b2664-e589-46bb-a3d5-0bf40561210a', '70412167-ef80-49a3-b764-8b08841fcbeb', 'bf9c32dc-2363-4a31-9e7f-74544f7d04a4', '2024-09-06 10:25:48.045');

-- ----------------------------
-- Primary Key structure for table MessageRead
-- ----------------------------
ALTER TABLE "public"."MessageRead" ADD CONSTRAINT "MessageRead_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table MessageRead
-- ----------------------------
ALTER TABLE "public"."MessageRead" ADD CONSTRAINT "MessageRead_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "public"."Message" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "public"."MessageRead" ADD CONSTRAINT "MessageRead_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
