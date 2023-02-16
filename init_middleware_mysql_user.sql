CREATE USER 'middleware'@'%' IDENTIFIED BY 'shopxbit-local';


GRANT ALL PRIVILEGES ON ApolloConfigDB. * TO 'middleware'@'%';
GRANT ALL PRIVILEGES ON ApolloPortalDB. * TO 'middleware'@'%';
GRANT ALL PRIVILEGES ON cat_db. * TO 'middleware'@'%';
GRANT ALL PRIVILEGES ON xxl_job. * TO 'middleware'@'%';


CREATE USER 'bos-user'@'%' IDENTIFIED BY 'shopxbit-bos123@!@#';
GRANT ALL PRIVILEGES ON bos. * TO 'bos-user'@'%';


create database api_gateway;
create database `order`;
create database bos_user;

GRANT ALL PRIVILEGES ON `order`. * TO 'bos-user'@'%';
GRANT ALL PRIVILEGES ON api_gateway. * TO 'bos-user'@'%';
GRANT ALL PRIVILEGES ON bos_user. * TO 'bos-user'@'%';

FLUSH PRIVILEGES;

