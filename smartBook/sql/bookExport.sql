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
