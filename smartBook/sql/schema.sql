--------------------------------------------------------
--  File created - Wednesday-November-23-2011   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table BOOK
--------------------------------------------------------

  CREATE TABLE "SMARTBOOK"."BOOK" 
   (	"ID" NUMBER, 
	"TITLE" VARCHAR2(100 BYTE), 
	"AUTHOR" VARCHAR2(100 BYTE), 
	"PUBLISHER" VARCHAR2(100 BYTE), 
	"PUBLISH_YEAR" VARCHAR2(20 BYTE), 
	"ISBN" VARCHAR2(20 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
REM INSERTING into SMARTBOOK.BOOK
Insert into SMARTBOOK.BOOK (ID,TITLE,AUTHOR,PUBLISHER,PUBLISH_YEAR,ISBN) values (21,'Hibernate in Action','Christian Bauer, Gavin King','Manning Publications','2004','193239415X');
Insert into SMARTBOOK.BOOK (ID,TITLE,AUTHOR,PUBLISHER,PUBLISH_YEAR,ISBN) values (22,'Effective Java','Joshua Bloch','Addison-Wesley','2008','0321356683 ');
Insert into SMARTBOOK.BOOK (ID,TITLE,AUTHOR,PUBLISHER,PUBLISH_YEAR,ISBN) values (23,'Clean Code','Robert C. Martin','Prentice Hall','2008','0132350882');
Insert into SMARTBOOK.BOOK (ID,TITLE,AUTHOR,PUBLISHER,PUBLISH_YEAR,ISBN) values (24,'The Pragmatic Programmer','Andrew Hunt, David Thomas','Addison-Wesley','1999','020161622X');
Insert into SMARTBOOK.BOOK (ID,TITLE,AUTHOR,PUBLISHER,PUBLISH_YEAR,ISBN) values (25,'Joel on Software','Joel Spolsky','Apress ','2004','1590593898');
Insert into SMARTBOOK.BOOK (ID,TITLE,AUTHOR,PUBLISHER,PUBLISH_YEAR,ISBN) values (26,'SCJP Sun Certified Programmer for Java 6 Exam ','Katherine Sierra, Bert Bates','McGraw-Hill Osborne Media','2008','0071591060');
Insert into SMARTBOOK.BOOK (ID,TITLE,AUTHOR,PUBLISHER,PUBLISH_YEAR,ISBN) values (27,'OCP Java SE 6 Programmer Practice Exams','Bert Bates, Katherine Sierra','McGraw-Hill Osborne Media','2010','0072260882');
Insert into SMARTBOOK.BOOK (ID,TITLE,AUTHOR,PUBLISHER,PUBLISH_YEAR,ISBN) values (28,'Head First Design Patterns','Elisabeth Freeman, Eric Freeman, Bert Bates, Kathy Sierra, Elisabeth Robson','O''Reilly Media','2004','0596007124');
Insert into SMARTBOOK.BOOK (ID,TITLE,AUTHOR,PUBLISHER,PUBLISH_YEAR,ISBN) values (29,'Maven: The Definitive Guide','Sonatype Company ','O''Reilly Media','2008','0596517335');
Insert into SMARTBOOK.BOOK (ID,TITLE,AUTHOR,PUBLISHER,PUBLISH_YEAR,ISBN) values (17,'Ext JS in Action','Jesus Garcia','Manning Publications','2010','1935182110');
--------------------------------------------------------
--  DDL for Index BOOK_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "SMARTBOOK"."BOOK_PK" ON "SMARTBOOK"."BOOK" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  Constraints for Table BOOK
--------------------------------------------------------

  ALTER TABLE "SMARTBOOK"."BOOK" ADD CONSTRAINT "BOOK_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
 
  ALTER TABLE "SMARTBOOK"."BOOK" MODIFY ("ID" NOT NULL ENABLE);


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
--------------------------------------------------------
--  File created - Wednesday-November-23-2011
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table CATEGORY
--------------------------------------------------------

  CREATE TABLE "SMARTBOOK"."CATEGORY"
   (	"ID" NUMBER,
	"NAME" VARCHAR2(60 BYTE)
   ) SEGMENT CREATION IMMEDIATE
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
REM INSERTING into SMARTBOOK.CATEGORY
Insert into SMARTBOOK.CATEGORY (ID,NAME) values (1,'programming');
Insert into SMARTBOOK.CATEGORY (ID,NAME) values (2,'java');
Insert into SMARTBOOK.CATEGORY (ID,NAME) values (3,'php');
Insert into SMARTBOOK.CATEGORY (ID,NAME) values (4,'design patterns');
Insert into SMARTBOOK.CATEGORY (ID,NAME) values (5,'hibernate');
Insert into SMARTBOOK.CATEGORY (ID,NAME) values (6,'tools');
Insert into SMARTBOOK.CATEGORY (ID,NAME) values (7,'javascript');
Insert into SMARTBOOK.CATEGORY (ID,NAME) values (9,'xml');
Insert into SMARTBOOK.CATEGORY (ID,NAME) values (8,'extjs');
--------------------------------------------------------
--  DDL for Index CATEGORY_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "SMARTBOOK"."CATEGORY_PK" ON "SMARTBOOK"."CATEGORY" ("ID")
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  Constraints for Table CATEGORY
--------------------------------------------------------

  ALTER TABLE "SMARTBOOK"."CATEGORY" ADD CONSTRAINT "CATEGORY_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;

  ALTER TABLE "SMARTBOOK"."CATEGORY" MODIFY ("ID" NOT NULL ENABLE);

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
