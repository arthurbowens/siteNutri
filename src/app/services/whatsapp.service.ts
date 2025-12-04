import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhatsAppService {
  private readonly numeroWhatsApp = '554191217504'; // +55 41 9121-7504

  obterNumero(): string {
    return this.numeroWhatsApp;
  }

  abrirConversa(mensagem: string = ''): void {
    const texto = mensagem ? encodeURIComponent(mensagem) : '';
    window.open(`https://wa.me/${this.numeroWhatsApp}?text=${texto}`, '_blank');
  }
}

