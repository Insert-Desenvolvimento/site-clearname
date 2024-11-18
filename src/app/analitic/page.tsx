'use client'
import React, { useState } from 'react'
import FormComponent from '../components/formComponent'

export default function Analitic() {
  const [isAgreed, setIsAgreed] = useState(false);
  return (
    <div>
    <FormComponent />
    <section>
      <h2>Solicite uma Análise</h2>
      <p>
        Termo de Consentimento para Contato: Seus dados pessoais estão seguros e serão tratados de acordo com a Lei Geral de Proteção de Dados (LGPD). Não compartilharemos suas informações com terceiros e não enviaremos spam.
        Autorizo o contato por telefone, WhatsApp e e-mail.
      </p>
      <form>
        <input
          type="checkbox"
          checked={isAgreed}
          onChange={(e) => setIsAgreed(e.target.checked)}
        />
        <label>Eu concordo com os termos</label>
      </form>
    </section>
  </div>
  )
}
