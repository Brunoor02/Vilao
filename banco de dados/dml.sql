use db_Vilao;

insert into tb_vilao(nm_vilao, ds_maldade, bt_temPoder)
	values('Malevola', 'Vingança e maldições', true);
    
select id_vilao	id,
	   nm_vilao,
       ds_maldade,
       bt_temPoder
from tb_vilao;