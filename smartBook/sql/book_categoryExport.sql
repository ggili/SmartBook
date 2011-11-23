--------------------------------------------------------
--  File created - Wednesday-November-23-2011   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table BOOK_CATEGORY
--------------------------------------------------------

  CREATE TABLE "SMARTBOOK"."BOOK_CATEGORY" 
   (	"BOOK_ID" NUMBER, 
	"CATEGORY_ID" NUMBER
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
REM INSERTING into SMARTBOOK.BOOK_CATEGORY
Insert into SMARTBOOK.BOOK_CATEGORY (BOOK_ID,CATEGORY_ID) values (21,5);
Insert into SMARTBOOK.BOOK_CATEGORY (BOOK_ID,CATEGORY_ID) values (21,1);
Insert into SMARTBOOK.BOOK_CATEGORY (BOOK_ID,CATEGORY_ID) values (23,1);
Insert into SMARTBOOK.BOOK_CATEGORY (BOOK_ID,CATEGORY_ID) values (24,1);
Insert into SMARTBOOK.BOOK_CATEGORY (BOOK_ID,CATEGORY_ID) values (25,1);
Insert into SMARTBOOK.BOOK_CATEGORY (BOOK_ID,CATEGORY_ID) values (28,4);
Insert into SMARTBOOK.BOOK_CATEGORY (BOOK_ID,CATEGORY_ID) values (26,2);
Insert into SMARTBOOK.BOOK_CATEGORY (BOOK_ID,CATEGORY_ID) values (26,1);
Insert into SMARTBOOK.BOOK_CATEGORY (BOOK_ID,CATEGORY_ID) values (28,1);
Insert into SMARTBOOK.BOOK_CATEGORY (BOOK_ID,CATEGORY_ID) values (17,8);
Insert into SMARTBOOK.BOOK_CATEGORY (BOOK_ID,CATEGORY_ID) values (17,7);
Insert into SMARTBOOK.BOOK_CATEGORY (BOOK_ID,CATEGORY_ID) values (29,9);
Insert into SMARTBOOK.BOOK_CATEGORY (BOOK_ID,CATEGORY_ID) values (29,6);
Insert into SMARTBOOK.BOOK_CATEGORY (BOOK_ID,CATEGORY_ID) values (22,2);
Insert into SMARTBOOK.BOOK_CATEGORY (BOOK_ID,CATEGORY_ID) values (27,2);
Insert into SMARTBOOK.BOOK_CATEGORY (BOOK_ID,CATEGORY_ID) values (27,1);
--------------------------------------------------------
--  Ref Constraints for Table BOOK_CATEGORY
--------------------------------------------------------

  ALTER TABLE "SMARTBOOK"."BOOK_CATEGORY" ADD CONSTRAINT "BOOK_CATEGORY_BOOK_FK1" FOREIGN KEY ("BOOK_ID")
	  REFERENCES "SMARTBOOK"."BOOK" ("ID") ENABLE;
 
  ALTER TABLE "SMARTBOOK"."BOOK_CATEGORY" ADD CONSTRAINT "BOOK_CATEGORY_CATEGORY_FK1" FOREIGN KEY ("CATEGORY_ID")
	  REFERENCES "SMARTBOOK"."CATEGORY" ("ID") ENABLE;
