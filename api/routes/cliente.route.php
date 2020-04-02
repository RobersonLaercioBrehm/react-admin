<?php
//Lista
$route->get('/', function () {
    $pag = 1; //$req->query('pag');
    json(model('cliente')->lst($pag));
    // json(model('cliente')->lst($pag);
});

//detalhe
$route->get('/{id:slug}', function ($id = null) {
    json(model('cliente')->get($id));
});

//Novo
$route->post('/', function () {
    $req = new Request();
    json(model('cliente')->add($req->getJson()));
});

//Editar
$route->put('/{id:slug}', function ($id = null) {
    $req = new Request();
    json(model('cliente')->udt($id, $req->getJson()));
});

//Deletar
$route->delete('/{id:slug}', function ($id = null) {
    json(model('cliente')->del($id));
});
