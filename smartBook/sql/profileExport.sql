--------------------------------------------------------
--  File created - Thursday-November-24-2011   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table PROFILE
--------------------------------------------------------

  CREATE TABLE "SMARTBOOK"."PROFILE" 
   (	"ID" NUMBER, 
	"NAME" VARCHAR2(60 BYTE), 
	"DESCRIPTION" VARCHAR2(400 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
REM INSERTING into SMARTBOOK.PROFILE
Insert into SMARTBOOK.PROFILE (ID,NAME,DESCRIPTION) values (1,'Java','Specific Java developer profile, interested in Java and all connected to it.');
Insert into SMARTBOOK.PROFILE (ID,NAME,DESCRIPTION) values (2,'JavaScript','JavaScript profile, interested in all that is connected to Javascript - frameworks, plugins, aso.');
--------------------------------------------------------
--  DDL for Index PROFILE_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "SMARTBOOK"."PROFILE_PK" ON "SMARTBOOK"."PROFILE" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  Constraints for Table PROFILE
--------------------------------------------------------

  ALTER TABLE "SMARTBOOK"."PROFILE" ADD CONSTRAINT "PROFILE_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
 
  ALTER TABLE "SMARTBOOK"."PROFILE" MODIFY ("ID" NOT NULL ENABLE);
