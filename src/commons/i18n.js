import { createI18n } from 'vue3-i18n'

const messages = {
    ptBr: {
        country: 'País',
        cases: 'Casos',
        todayCases: 'Casos Hoje',
        deaths: 'Mortes',
        todayDeaths: 'Mortes Hoje',
        recovered: 'Recuperados',
        active: 'Ativos',
        critical: 'Críticos',
        casesPerOneMillion: 'Casos a cada Um Milhão de Pessoas',
        deathsPerOneMillion: 'Casos a cada Um Milhão de Pessoas',
        totalTests: 'Total de Testes',
        testsPerOneMillion: 'Testes a cada Um Milhão de Pessoas'
    },
}

const i18n = createI18n({
    locale: "ptBr",
    messages: messages,
})

export default i18n