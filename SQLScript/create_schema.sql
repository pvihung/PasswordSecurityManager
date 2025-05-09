-- password_manager database schema

drop table if exists user;
create table user (
	userid int not null auto_increment primary key,
    email varchar(255) not null,
    master_pass varchar(255) not null,
    username varchar(255) not null
);

drop table if exists vault_entry;
create table vault_entry (
	entryid int not null auto_increment primary key, 
    app_name varchar(255) not null null, 
    last_modified datetime default current_timestamp,
    password varchar(255) not null,
    username varchar(255) not null,
    userid int not null, 
    foreign key (userid) references user(userid)
);

drop table if exists forgot_request;
create table forgot_request (
	requestid int not null auto_increment primary key,
    requested_at datetime(6) not null, 
    reset_token varchar(100) not null, 
    sent_to varchar(255) not null,
    userid int not null,
    foreign key (userid) references user(userid)
);

drop table if exists logins;
create table login (
	login_id int not null auto_increment primary key,
    ipadd varchar(255) not null,
    previous_login datetime(6) not null,
    userid int not null,
    foreign key (userid) references user(userid)
);

