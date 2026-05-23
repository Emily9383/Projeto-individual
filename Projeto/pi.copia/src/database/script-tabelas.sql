create database Projeto;

use Projeto;

create table usuario (
id int primary key auto_increment,
nome varchar(45) not null,
email varchar(145) not null,
senha varchar(45) not null,
data_cadastro datetime default current_timestamp
);

create table quiz(
idQuiz int primary key auto_increment,
personagem varchar(45),
data_resultado datetime default current_timestamp,
fkusuario int,
constraint usuario_quiz foreign key (fkusuario) references usuario(id)
);