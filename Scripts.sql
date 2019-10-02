create database GOL;
go

use GOL;

CREATE TABLE Airplane(
  Id int identity(1,1) not null primary key,
  CodigoAviao varchar(10) not null,
  Modelo varchar(60) not null,
  Passageiros int not null,
  Criacao date default getdate()
);