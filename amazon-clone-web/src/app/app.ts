import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit {
  // guarda os produtos que chegarem da API
  products: any[] = [];

  ngOnInit() {
    this.carregarProdutos();
  }

  // Faz a chamada nativa e limpa para o Spring Boot
  async carregarProdutos() {
    try {
      const response = await fetch('http://localhost:8080/api/products');
      this.products = await response.json();
    } catch (error) {
      console.error('Erro de conexão com o middleware:', error);
    }
  }
}