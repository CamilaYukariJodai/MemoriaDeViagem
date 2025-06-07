create database viagemlog;
use viagemlog;

create table usuarios (
idUsuario int primary key auto_increment,
nome varchar(100) not null,
email varchar(100) unique not null,
senha varchar(100) not null
);

create table viagens (
idViagem int primary key auto_increment,
destino varchar(100) not null,
dtViagem date not null,
duracao int not null,
companhia varchar(50) not null,
categoria varchar(80) not null,
comentario varchar(255),
imagem varchar(255)
);

create table userViagem (
idUsuario int,
idViagem int,
dtCadastro datetime default current_timestamp(),
constraint pkComposta primary key (idUsuario, idViagem),
constraint fkUsuarioViagem foreign key (idUsuario) references usuarios(idUsuario),
constraint fkViagemUsuario foreign key (idViagem) references viagens(idViagem)
);


insert into usuarios (nome, email, senha) values ('jp', 'jp@email.com', 'teste');

insert into viagens (destino, dtViagem, duracao, companhia, categoria, comentario, imagem) 
	   select destino, dtViagem, duracao, companhia, categoria, comentario, imagem from viagens where idViagem = 23;

select * from usuarios;
select * from viagqens;
select * from userViagem;
select u.idUsuario, v.idViagem, u.nome, u.email, v.dtViagem, v.destino, v.duracao, v.companhia, v.categoria, v.comentario, v.imagem from userViagem uv join viagens v on uv.idViagem = v.idViagem join usuarios u on u.idUsuario = uv.idUsuario;

update userViagem set idUsuario = 2 where idViagem = 25;

insert into userViagem (idUsuario, idViagem) values 
(1, 24),
(1, 25),
(1, 26); 

DELETE from viagens where idViagem > 0;



    select v.imagem from userViagem uv 
      join viagens v on uv.idViagem = v.idViagem 
      join usuarios u on u.idUsuario = uv.idUsuario  
      where u.idUsuario = 1 AND v.idViagem = 23;


select v.imagem from userViagem uv join viagens v on uv.idViagem = v.idViagem join usuarios u on u.idUsuario = uv.idUsuario where u.idUsuario = 2 AND v.idViagem = 24;
