let nome_produto = "";
let valor_produto = 0;
let quantidade_produto = 0;
let valor_pago = 0;
let numero_venda = 0;
let valor_desconto = 0;
let valor_total = 0;
let pre_venda = []

function enviar_vendas() {
    
    nome_produto = document.getElementById('nome_produto').value;
    valor_produto = document.getElementById('valor_produto').value;
    quantidade_produto = document.getElementById('quantidade_produto').value;
    valor_pago = document.getElementById('valor_pago').value;
    valor_total = quantidade_produto * valor_produto;
    if (valor_pago < valor_total) {
        valor_desconto = valor_total - valor_pago
    } else {
        valor_desconto = 0
    }
    pre_venda.push([
        "<tr>" + "<td>" + numero_venda + "</td>" +
        "<td>" + nome_produto + "</td>" +
        "<td>" + quantidade_produto + "</td>" +
        "<td>" + valor_produto + "</td>" +
        "<td>" + valor_total + "</td>" +
        "<td>" + valor_pago + "</td>" +
        "<td>" + valor_desconto + "</td>" + "</tr>"

    ])
    let venda = pre_venda.join('');
    document.getElementById("Vendas").innerHTML = venda;

}
function calcularTotal() {
    
}