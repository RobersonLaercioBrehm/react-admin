<?php
/**
 * Todo: (rober) Para tabelas modulares as invés de utilizar chave estrangeira, pode-se anexar o id da tabela principal co id da taebela modulo
 */
class ClienteModel extends Model {

    public function lst() {
        return $this->select('cliente LEFT JOIN cliente_endereco ON cliente_endereco.id = cliente.id', []);}

    public function get($id = null) {
        return $this->select('cliente LEFT JOIN cliente_endereco ON cliente_endereco.id = cliente.id', [], "cliente.id = '{$id}' ");
    }

    public function add($json = null) {

        $id = md5(date('YmsHis' . rand(1000, 9999)));
        $data = date('Y-m-d H:i:s');
        $cli['id'] = $id;
        $cli['nome'] = $json['nome'];
        $cli['criacao'] = $data;
        $cli['alteracao'] = $data;

        if ($this->insert('cliente', $cli)) {

            $end['id'] = $id;
            $end['rua'] = $json['rua'];
            $end['numero'] = $json['numero'];
            $end['complemento'] = $json['complemento'];
            $end['bairro'] = $json['bairro'];
            $end['cidade'] = $json['cidade'];
            $end['estado'] = $json['estado'];
            $end['cep'] = $json['cep'];
            $this->insert('cliente_endereco', $end);
            return ['id' => $cli['id']];
        }
    }

    public function udt($id = null, $json = null) {

        $data = date('Y-m-d H:i:s');
        $cli['nome'] = $json['nome'];
        $cli['alteracao'] = $data;

        if ($this->update('cliente', $cli, "id = '{$id}' ", 1)) {

            $end['rua'] = $json['rua'];
            $end['numero'] = $json['numero'];
            $end['complemento'] = $json['complemento'];
            $end['bairro'] = $json['bairro'];
            $end['cidade'] = $json['cidade'];
            $end['estado'] = $json['estado'];
            $end['cep'] = $json['cep'];

            $this->update('cliente_endereco', $end, "id = '{$id}' ", 1);

        }
        return $this->get($id);

    }

    public function del($id = null) {
        $this->delete('cliente', "id = '{$id}'", 1);
    }

}
