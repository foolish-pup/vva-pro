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

 Date: 24/01/2025 16:15:21
*/


-- ----------------------------
-- Table structure for Log
-- ----------------------------
DROP TABLE IF EXISTS "public"."Log";
CREATE TABLE "public"."Log" (
  "id" text COLLATE "pg_catalog"."default" NOT NULL,
  "userId" text COLLATE "pg_catalog"."default" NOT NULL,
  "ip" text COLLATE "pg_catalog"."default" NOT NULL,
  "action" text COLLATE "pg_catalog"."default" NOT NULL,
  "method" "public"."Method" NOT NULL,
  "params" "pg_catalog"."jsonb" NOT NULL,
  "os" text COLLATE "pg_catalog"."default" NOT NULL,
  "browser" text COLLATE "pg_catalog"."default" NOT NULL,
  "province" text COLLATE "pg_catalog"."default",
  "city" text COLLATE "pg_catalog"."default",
  "adcode" text COLLATE "pg_catalog"."default",
  "createdAt" timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
)
;

-- ----------------------------
-- Records of Log
-- ----------------------------
INSERT INTO "public"."Log" VALUES ('89e10225-184b-4391-a536-b5076211cfdd', 'dddd7ba9-c1d4-4a6b-b946-f05e2f79880f', '::1', '/auth/login', 'POST', '{"password": "abc123456", "userName": "Admin", "captchaCode": "14"}', 'Windows 10', 'Chrome', NULL, NULL, NULL, '2025-01-24 07:03:52.652');
INSERT INTO "public"."Log" VALUES ('28a74ef7-ceb6-4ed4-9efc-bad2dc020e97', 'dddd7ba9-c1d4-4a6b-b946-f05e2f79880f', '::1', '/auth/juejin', 'POST', '{"cursor": "0", "user_id": "2098345026782328", "sort_type": 2}', 'Windows 10', 'Chrome', NULL, NULL, NULL, '2025-01-24 07:03:54.684');

-- ----------------------------
-- Primary Key structure for table Log
-- ----------------------------
ALTER TABLE "public"."Log" ADD CONSTRAINT "Log_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table Log
-- ----------------------------
ALTER TABLE "public"."Log" ADD CONSTRAINT "Log_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
