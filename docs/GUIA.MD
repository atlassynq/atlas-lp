1. Stack e conceitos gerais

    Framework: Next.js 16 com App Router e TypeScript.​

    Estilo: Tailwind CSS com design inspirado em Apple (clean, muito espaço em branco, foco em tipografia).​

    Componentes:

        UI base: shadcn/ui ou Radix UI para acessibilidade.​

        Ícones: Lucide ou Phosphor.

    Tema visual:

        Fundo em degradê suave ou sólido muito claro, com glassmorphism leve em alguns cards.

        Tipografia forte em headings, larguras de texto confortáveis.

2. Organização do projeto (Next 16)

    App Router:

        app/page.tsx → landing page principal.

        Se necessário, futuras rotas em app/(marketing)/....

    Componentes reutilizáveis em components/:

        navbar.tsx, hero.tsx, section.tsx, pricing-card.tsx, founder-card.tsx, footer.tsx.

    Tailwind:

        Configurar container (ex.: max-w-5xl ou max-w-6xl, mx-auto).

        Definir cores de tema: background, foreground, muted, accent.

3. Conteúdo das seções
3.1 Home (Primeira dobra)

    H1 forte:

        “Não é sobre estar online. É sobre estar presente.”

    Subtítulo (1 linha, humano):

        Ex.: “ATLAS é o radar social que aproxima você de pessoas, eventos e comunidades que existem ao seu redor.”​

    Layout:

        Desktop: duas colunas (texto + CTA / visual conceitual tipo “mapa social”).

        Mobile: texto → CTA → visual.

    CTAs:

        Principal: “Entre no movimento” ou “Em breve”.

        Secundário opcional: “Saiba mais” com scroll suave para “O que é o ATLAS”.

3.2 “O que é o ATLAS”

    Título: “O que é o ATLAS”.

    Parágrafo curto explicando:

        Rede social baseada em localização que funciona como um “radar social”.​

    Bullets sugeridos:

        “Conecta você com pessoas que estão realmente por perto.”​

        “Mostra eventos que estão acontecendo agora, na vida real.”​

        “Ajuda você a descobrir comunidades locais que combinam com você.”​

    Linguagem não técnica, sem termos de backend.

3.3 “Como Funciona”

    Título: “Como funciona”.

    Subtítulo: algo como “ATLAS transforma o seu redor em possibilidades de conexão.”

    4–5 cards simples com ícone + título + 1–2 linhas:

        “Veja quem está por perto” (pessoas próximas que decidiram compartilhar localização).​

        “Reviva quem você cruzou” (conceito de reencontro, texto conceitual).

        “Mapa de eventos ativos” (eventos geolocalizados com horário e distância).​

        “Comunidades locais” (grupos por interesse e região).​

        “Conexão via convite” (seguir, convites e privacidade).

    Layout: grid responsivo (2–3 colunas em desktop, empilhado em mobile).

3.4 “Planos”

    Título: “Planos”.

    Intro curta:

        “Comece observando o mundo ao seu redor. Evolua para participar ativamente das conexões e comunidades.”

    Dois cards conceituais (sem tabela):

    Atlas Essential

        Tag: “Modo observador”.

        Texto:

            “Visualização limitada de pessoas e eventos ao redor.”

            “Para quem quer sentir o pulso da cidade com mais discrição.”

    Atlas Elite

        Tag: “Conexão completa”.

        Texto:

            “Crie e participe de comunidades exclusivas.”

            “Conecte-se diretamente com pessoas, confirme presença em eventos e participe ativamente da rede.”

    Destacar visualmente Atlas Elite (sombra, borda, leve escala).

3.5 “Comunidades & Eventos”

    Título: “Comunidades & eventos”.

    Texto:

        Comunidades como espaço de trabalho, esporte, bem-estar, estudo, etc.​

        Eventos acontecendo em tempo real, próximos de você.​

    Exemplo de usos:

        “Grupos de corrida no seu bairro.”

        “Coworking espontâneo em cafés.”

        “Encontros de estudo, meditação, networking.”

    Visual: cards fictícios de comunidades/eventos (nome, categoria, breve descrição).

3.6 “Nossa Missão”

    Título: “Nossa missão”.

    Parágrafo 3–4 linhas:

        Presença no mundo físico, conexões humanas de qualidade, menos ruído digital.​

        Tecnologia como meio para encontros reais, não como fim.

    3 bullets de reforço:

        “Menos scroll infinito, mais encontros reais.”

        “Menos ruído, mais conexões que fazem sentido.”

        “Tecnologia a serviço da presença, não da distração.”

3.7 “Conheça os Sócios”

    Título: “Conheça os sócios”.

    Grid de founder-card:

        Foto (círculo/rounded), nome, papel enxuto.

        Texto curto e humano (por que está construindo o ATLAS, visão sobre conexão humana).

    Estilo: limpo, aproximando da estética Apple de “People” (humanizado).

3.8 “Contato”

    Título: “Contato”.

    Texto curto convidando para conversar/parcerias.

    Conteúdo mínimo:

        E-mail: primeatlas.comunic@gmail.com.

    Opcional:

        Formulário simples (nome, e-mail, mensagem) preparado para futura integração com API, mas inicialmente sem backend.​

4. Diretrizes Apple-like (aplicadas ao Next 16)

    Tipografia:

        Headings grandes, peso médio/semibold; corpo com line-height generoso.

    Espaçamento:

        py-20 em desktop para seções, com forte separação visual.

    Cores:

        Poucas cores, muito branco/preto/cinza + 1 cor de acento.

    Animações:

        Transições suaves (fade/translate-y leve), 150–250ms.

    Responsividade:

        Mobile-first, usando breakpoints padrões do Tailwind.
