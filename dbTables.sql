-- public.creditcard definition

-- Drop table

-- DROP TABLE public.creditcard;

CREATE TABLE public.creditcard (
	id serial4 NOT NULL,
	customerid numeric(20) NULL,
	cardtype int4 NULL,
	cardnumber numeric(20) NULL,
	cardholdername varchar(1000) NULL,
	expirymonth int4 NULL,
	expiryyear int4 NULL,
	cvv int4 NULL,
	cardlimit numeric(20) NULL,
	cardbalance numeric(20) NULL,
	accountcutoffdate date NULL,
	lastpaymentdate date NULL,
	mailtelephoneorder bool NULL,
	internetorder bool NULL,
	abroadusage bool NULL,
	CONSTRAINT creditcard_pkey PRIMARY KEY (id)
);

-- public.creditcardtransaction definition

-- Drop table

-- DROP TABLE public.creditcardtransaction;

CREATE TABLE public.creditcardtransaction (
	id serial4 NOT NULL,
	cardid numeric(20) NULL,
	amount numeric(20) NULL,
	transactiondate date NULL,
	merchant varchar(200) NULL,
	category int4 NULL,
	CONSTRAINT creditcardtransaction_pkey PRIMARY KEY (id)
);

-- public.customer definition

-- Drop table

-- DROP TABLE public.customer;

CREATE TABLE public.customer (
	id serial4 NOT NULL,
	governmentid numeric(20) NULL,
	"name" varchar(1000) NULL,
	surname varchar(1000) NULL,
	foreigner bool NULL,
	birthdate date NULL,
	CONSTRAINT customer_pkey PRIMARY KEY (id)
);