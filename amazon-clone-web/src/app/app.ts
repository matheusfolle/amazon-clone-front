import { Component, OnInit, signal } from '@angular/core';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.html',
    styleUrls: ['./app.scss']
})
export class App implements OnInit {
    // Transformamos o array em um Signal reativo
    products = signal<any[]>([]);

    ngOnInit() {
        this.carregarProdutos();
    }
    // Faz a chamada nativa e limpa para o Spring Boot
    async carregarProdutos() {
        try {
            const response = await fetch('http://localhost:8080/api/products');
            const data = await response.json();

            // Atualizamos o valor do Signal, forçando a tela a renderizar
            this.products.set(data);
        } catch (error) {
            console.error('Erro de conexão com o middleware:', error);
        }
    }
}