create database viagemlog;
use viagemlog;

create table usuarios (
idUsuario int primary key auto_increment,
nome varchar(100),
email varchar(100),
senha varchar(100)
);

create table viagens (
idViagem int primary key auto_increment,
destino varchar(100),
dtViagem date,
duracao int,
companhia varchar(50),
categoria varchar(80),
comentario varchar(255),
imagem varchar(255)
);

create table userViagem (
idUsuario int,
idViagem int,
constraint pkComposta primary key (idUsuario, idViagem),
constraint fkUsuarioViagem foreign key (idUsuario) references usuarios(idUsuario),
constraint fkViagemUsuario foreign key (idViagem) references viagens(idViagem)
);

select * from usuarios;