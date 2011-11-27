--------------------------------------------------------
--  File created - Thursday-November-24-2011   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table PROFILE_CATEGORY
--------------------------------------------------------

  CREATE TABLE "SMARTBOOK"."PROFILE_CATEGORY" 
   (	"PROFILE_ID" NUMBER, 
	"CATEGORY_ID" NUMBER
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
REM INSERTING into SMARTBOOK.PROFILE_CATEGORY
Insert into SMARTBOOK.PROFILE_CATEGORY (PROFILE_ID,CATEGORY_ID) values (1,1);
Insert into SMARTBOOK.PROFILE_CATEGORY (PROFILE_ID,CATEGORY_ID) values (1,2);
Insert into SMARTBOOK.PROFILE_CATEGORY (PROFILE_ID,CATEGORY_ID) values (1,5);
Insert into SMARTBOOK.PROFILE_CATEGORY (PROFILE_ID,CATEGORY_ID) values (2,8);
Insert into SMARTBOOK.PROFILE_CATEGORY (PROFILE_ID,CATEGORY_ID) values (2,7);
--------------------------------------------------------
--  Ref Constraints for Table PROFILE_CATEGORY
--------------------------------------------------------

  ALTER TABLE "SMARTBOOK"."PROFILE_CATEGORY" ADD CONSTRAINT "PROFILE_CATEGORY_CATEGORY_FK1" FOREIGN KEY ("CATEGORY_ID")
	  REFERENCES "SMARTBOOK"."CATEGORY" ("ID") ENABLE;
 
  ALTER TABLE "SMARTBOOK"."PROFILE_CATEGORY" ADD CONSTRAINT "PROFILE_CATEGORY_PROFILE_FK1" FOREIGN KEY ("PROFILE_ID")
	  REFERENCES "SMARTBOOK"."PROFILE" ("ID") ENABLE;