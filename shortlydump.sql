--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4 (Ubuntu 14.4-1.pgdg20.04+1)
-- Dumped by pg_dump version 14.4 (Ubuntu 14.4-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: heroku_ext; Type: SCHEMA; Schema: -; Owner: u92v3qf98t54gf
--

CREATE SCHEMA heroku_ext;


ALTER SCHEMA heroku_ext OWNER TO u92v3qf98t54gf;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: urls; Type: TABLE; Schema: public; Owner: gcsvhjqkezjqzg
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    "userId" integer NOT NULL,
    views integer DEFAULT 0 NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.urls OWNER TO gcsvhjqkezjqzg;

--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: gcsvhjqkezjqzg
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.urls_id_seq OWNER TO gcsvhjqkezjqzg;

--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gcsvhjqkezjqzg
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: gcsvhjqkezjqzg
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.users OWNER TO gcsvhjqkezjqzg;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: gcsvhjqkezjqzg
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO gcsvhjqkezjqzg;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gcsvhjqkezjqzg
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: gcsvhjqkezjqzg
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: gcsvhjqkezjqzg
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: gcsvhjqkezjqzg
--

COPY public.urls (id, url, "shortUrl", "userId", views, "createdAt") FROM stdin;
45	https://www.youtube.com	spimjl4xdj	2	0	2022-08-07 18:43:56.644419
14	https://www.github.com	x1egcb8spf	2	6	2022-08-05 21:28:58.050002
48	https://www.primevideo.com	trtqpzfd2v	2	0	2022-08-08 18:00:58.035562
49	https://www.stackoverflow.com	olwlwt5c7q	2	0	2022-08-08 18:12:47.831626
50	https://twitter.com	7jmo29lez4	2	0	2022-08-08 18:14:14.569864
51	https://hbomax.com	oip2h15irs	2	0	2022-08-08 18:15:07.814569
54	https://www.google.com	5mtr5xvhg8	18	0	2022-08-08 19:48:24.089419
13	https://www.facebook.com	tpbh3ds6ed	2	3	2022-08-05 21:28:44.023217
12	https://www.globo.com	crv1wvs977	2	2	2022-08-05 21:28:28.948853
11	https://google.com	rpsmbgxktj	2	1	2022-08-03 22:01:04.620408
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: gcsvhjqkezjqzg
--

COPY public.users (id, name, email, password, "createdAt") FROM stdin;
1	Darlon Gomes	gomesdarlon@icloud.com	$2b$10$38Qf1hC6.5HGcTbRUKXQp.5VfobjcbEENGbkC8rMvYFFfZ2811TBG	2022-08-03 20:45:52.090274
2	Amanda Gomes	amandagomes@icloud.com	$2b$10$fkYdMk9V6WaMqYa5gu7FRO7IUDVqNIsEocuEnW8G.F.2IZSCGWdby	2022-08-03 20:49:34.801933
3	Hugo North	hugonorth@gmail.com	$2b$10$1kABSKGfJl7DaInM2yi9H.u0cry4rw0igssNI2fqoFm.fEWSCXg1m	2022-08-06 01:32:37.167206
13	Marlon Bernardo	marlonbernardo@gmail.com	$2b$10$al3X4dttdYDfYzhRmHnrm.kXlK309IijNIHeceuvPxbL1ggs0lF0O	2022-08-06 01:44:03.958697
14	Giggs	giggs@icloud.com	$2b$10$8W3mqs.oYPSAnbLtKr6A4uOCeLC0IBQPuQFDDyYncUpAhEkhvhVDS	2022-08-08 14:39:15.332585
15	Livison	livison@gmail.com	$2b$10$GqX4ymkH6tXhDwJhQGE8QeE.X9nbtmSbP1obSDwEDNKZvhKlV1uoi	2022-08-08 14:40:04.050046
16	Natsu Fire	dannatsufire@gmail.com	$2b$10$UZdFpkJg0jxBxlr89f2MweeAkkOazT6wthBTgXMSfezWh5E4DJzz2	2022-08-08 14:40:59.374565
17	Ademiro, O Grande	ademir@ademir.com	$2b$10$6PYUe6thGlmDvAY1.jyiiuiNeiQD6AFWOaFFpXhH1zlKFxeh0/liu	2022-08-08 18:06:42.473028
18	Luan Severo	luan@gmail.com	$2b$10$aFpnPf.NzyvqA3hQkzPRj.3FlpunEYakj24V8UtqM8TcCucZh6wbC	2022-08-08 19:48:06.548245
\.


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gcsvhjqkezjqzg
--

SELECT pg_catalog.setval('public.urls_id_seq', 54, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gcsvhjqkezjqzg
--

SELECT pg_catalog.setval('public.users_id_seq', 18, true);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: gcsvhjqkezjqzg
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: urls urls_shortUrl_key; Type: CONSTRAINT; Schema: public; Owner: gcsvhjqkezjqzg
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_shortUrl_key" UNIQUE ("shortUrl");


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: gcsvhjqkezjqzg
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: gcsvhjqkezjqzg
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: urls urls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gcsvhjqkezjqzg
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: SCHEMA heroku_ext; Type: ACL; Schema: -; Owner: u92v3qf98t54gf
--

GRANT USAGE ON SCHEMA heroku_ext TO gcsvhjqkezjqzg;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: gcsvhjqkezjqzg
--

REVOKE ALL ON SCHEMA public FROM postgres;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO gcsvhjqkezjqzg;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- Name: LANGUAGE plpgsql; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON LANGUAGE plpgsql TO gcsvhjqkezjqzg;


--
-- PostgreSQL database dump complete
--

