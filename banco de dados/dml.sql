use db_Vilao;

insert into tb_vilao(nm_vilao, ds_maldade, ds_temPoder)
	values('Malevola', 'Vingança e maldições', "Tem poder, e muito");
    
select id_vilao	id,
	   nm_vilao,
       ds_maldade,
       bt_temPoder
from tb_vilao;