CREATE DATABASE "shortly";

CREATE TABLE "users" (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"name" TEXT NOT NULL,
	"email" TEXT NOT NULL UNIQUE,
	"password" TEXT NOT NULL,
	"createdAt" TIMESTAMP NOT NULL DEFAULT 'now()',
	
);

CREATE TABLE "urls" (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"url" TEXT NOT NULL,
	"shortUrl" TEXT NOT NULL UNIQUE,
	"userId" int NOT NULL REFERENCES "users"("id"),
	"count" int NOT NULL DEFAULT '0',
	"createdAt" TIMESTAMP NOT NULL DEFAULT 'now()', 
);

