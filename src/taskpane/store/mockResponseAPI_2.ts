// import { ContractRecommendationResponseT } from "../api/v1/contract";
// import { LevelOfCriticalEnum } from "../enums";

// const fakeResponseAPI: ContractRecommendationResponseT[] = [
//   {
//     levelRisk: LevelOfCriticalEnum.LOW,
//     partContract:
//       "Принципал поручает Агенту, а Агент обязуется на основании выдаваемой Принципалом доверенности за вознаграждение совершать от имени и за счет Принципала",
//     partModified:
//       "Принципал поручает Агенту, а Сторона обязуется ===ЧЕТОТАМ=== на основании выдаваемой Принципалом доверенности за вознаграждение совершать от имени и за счет Принципала юридические и ===ЧЕТОТАМ===",
//     comment:
//       "Добавление условия о соответствии поручений законодательству РФ снижает риск выполнения Агентом незаконных действий, что может привести к юридическим последствиям для обеих сторон.",
//     id: null,
//   },
//   {
//     levelRisk: LevelOfCriticalEnum.LOW,
//     partContract:
//       "Все расходы и издержки Агента, связанные с исполнением агентского поручения, предусмотренного настоящим Договором, входят в состав вознаграждения и отдельно не оплачиваются.",
//     partModified:
//       "Все расходы и издержки Агента, связанные с исполнением агентского поручения, предусмотренного настоящим Договором, входят в состав вознаграждения и отдельно не оплачиваются, за исключением случаев, когда такие расходы были предварительно согласованы с Принципалом в письменной форме.",
//     comment:
//       "Уточнение о предварительном согласовании расходов позволяет Агенту избежать ситуации, когда он несет значительные расходы, которые не компенсируются Принципалом.",
//     id: null,
//   },
//   {
//     levelRisk: LevelOfCriticalEnum.LOW,
//     partContract:
//       "Принципал в течение 2 (двух) рабочих дней с момента получения Отчета Агента проводит проверку данных, указанных в Отчете Агента, и подписывает его, либо в тот же срок направляет Агенту мотивированный отказ от подписания Отчета Агента.",
//     partModified:
//       "Принципал в течение 5 (пяти) рабочих дней с момента получения Отчета Агента проводит проверку данных, указанных в Отчете Агента, и подписывает его, либо в тот же срок направляет Агенту мотивированный отказ от подписания Отчета Агента.",
//     comment:
//       "Увеличение срока на проверку Отчета Агента до 5 рабочих дней позволяет Принципалу более тщательно проверять документы, что снижает риск ошибок и недоразумений.",
//     id: null,
//   },
//   {
//     levelRisk: LevelOfCriticalEnum.LOW,
//     partContract:
//       "В случае непредставления Принципалом в сроки, указанные в п.п.4.5.3, 4.5.4 настоящего Договора, подписанного Отчета Агента, либо непредставления в указанные сроки мотивированного отказа от подписания Отчета Агента, такие Отчеты Агента считаются согласованными Принципалом в редакции, предложенной Агентом, а сведения, указанные в таких Отчетах Агента, считаются принятыми Принципалом без возражений, агентские поручения исполненными.",
//     partModified:
//       "В случае представления Принципалом в сроки, указанные в п.п.4.5.3, 4.5.7 настоящего Договора, подписанного Отчета Агента, либо непредставления в указанные сроки мотивированного отказа от подписания Отчета Агента, такие Отчеты Агента считаются согласованными Принципалом в редакции, предложенной Агентом, а сведения, указанные в таких Отчетах Агента, считаются принятыми Принципалом без возражений, агентские поручения исполненными, за исключением случаев, когда Принципал докажет, что непредставление Отчета было вызвано обстоятельствами непреодолимой силы.",
//     comment:
//       "Добавление исключения для обстоятельств непреодолимой силы защищает Принципала от автоматического согласования Отчета в случае форс-мажорных обстоятельств.",
//     id: null,
//   },
//   {
//     levelRisk: LevelOfCriticalEnum.LOW,
//     partContract:
//       "В течение 5 (пяти) рабочих дней с момента прекращения действия Договора (независимо от срока и оснований прекращения) возвратить Принципалу выданную в соответствии с настоящим Договором подлинную доверенность, а также иные документы, полученные от Принципала и Клиентов в связи с исполнением Договора.",
//     partModified:
//       "В течение 5 (пяти) рабочих дней с момента прекращения действия Договора (независимо от срока и оснований прекращения) возвратить Принципалу выданную в соответствии с настоящим Договором подлинную доверенность, а также иные документы, полученные от Принципала и Клиентов в связи с исполнением Договора, за исключением документов, которые Агент обязан хранить в соответствии с законодательством Российской Федерации.",
//     comment:
//       "Уточнение о хранении документов в соответствии с законодательством РФ защищает Агента от нарушения обязательств по хранению документов, предусмотренных законодательством.",
//     id: null,
//   },
//   {
//     levelRisk: LevelOfCriticalEnum.LOW,
//     partContract:
//       "Принципал вправе: Производить проверку деятельности Агента в рамках настоящего Договора любыми способами по выбору Принципала.",
//     partModified:
//       "Принципал вправе: Производить проверку деятельности Агента в рамках настоящего Договора любыми способами по выбору Принципала, при условии предварительного уведомления Агента не менее чем за 5 (пять) рабочих дней.",
//     comment:
//       "Уточнение о предварительном уведомлении Агента о проверке защищает его от неожиданных проверок, что позволяет лучше подготовиться и избежать возможных недоразумений.",
//     id: null,
//   },
//   {
//     levelRisk: LevelOfCriticalEnum.LOW,
//     partContract:
//       "Агент обязуется: На условиях настоящего Договора от имени и за счет Принципала исполнять агентские поручения согласно Приложению №1 к настоящему Договору в соответствии с Регламентом взаимодействия Сторон, изложенным в Приложении №3 к настоящему Договору.",
//     partModified:
//       "Агент обязуется: На условиях настоящего Договора от имени и за счет Принципала исполнять агентские поручения согласно Приложению №1 к настоящему Договору в соответствии с Регламентом взаимодействия Сторон, изложенным в Приложении №3 к настоящему Договору, при условии, что такие поручения не противоречат законодательству Российской Федерации.",
//     comment:
//       "Добавление условия о соответствии поручений законодательству РФ снижает риск выполнения Агентом незаконных действий, что может привести к юридическим последствиям для обеих сторон.",
//     id: null,
//   },
//   {
//     levelRisk: LevelOfCriticalEnum.LOW,
//     partContract:
//       "Принципал вправе: В одностороннем порядке изменять Тарифы на оказание Услуг, уведомив об этом Агента не менее чем за 30 (тридцать) календарных дней до введения новых Тарифов.",
//     partModified:
//       "Принципал вправе: В одностороннем порядке изменять Тарифы на оказание Услуг, уведомив об этом Агента не менее чем за 30 (тридцать) календарных дней до введения новых Тарифов, при условии, что такие изменения не ухудшают положения Агента по настоящему Договору.",
//     comment:
//       "Уточнение о том, что изменения Тарифов не должны ухудшать положение Агента, защищает его от возможных убытков и несправедливых условий.",
//     id: null,
//   },
//   {
//     levelRisk: LevelOfCriticalEnum.LOW,
//     partContract:
//       "Принципал обязуется: В течение 5 (пяти) рабочих дней с момента заключения настоящего Договора направить Агенту План продаж на 12 месяцев, сформированный на основе прогнозных данных, представленных Агентом в процессе участия в закупочной процедуре, в соответствии с которой был заключен настоящий Договор.",
//     partModified:
//       "Принципал обязуется: В течение 10 (десяти) рабочих дней с момента заключения настоящего Договора направить Агенту План продаж на 12 месяцев, сформированный на основе прогнозных данных, представленных Агентом в процессе участия в закупочной процедуре, в соответствии с которой был заключен настоящий Договор.",
//     comment:
//       "Увеличение срока на предоставление Плана продаж до 10 рабочих дней позволяет Принципалу более тщательно подготовить документ, что снижает риск ошибок и недоразумений.",
//     id: null,
//   },
//   {
//     levelRisk: LevelOfCriticalEnum.LOW,
//     partContract:
//       "Принципал вправе: Корректировать размер агентского вознаграждения на сумму штрафов, начисленных в соответствии с пп.5.6 и 5.7 настоящего Договора, а также в соответствии с Приложением №2 к Договору.",
//     partModified:
//       "Принципал вправе: Корректировать размер агентского вознаграждения на сумму штрафов, начисленных в соответствии с пп.5.6 и 5.7 настоящего Договора, а также в соответствии с Приложением №2 к Договору, при условии предварительного письменного уведомления Агента о таких штрафах и предоставления ему возможности устранить нарушения в разумный срок.",
//     comment:
//       "Уточнение о предварительном уведомлении и возможности устранения нарушений защищает Агента от необоснованных штрафов и позволяет ему исправить ситуацию до применения санкций.",
//     id: null,
//   },
//   {
//     levelRisk: LevelOfCriticalEnum.LOW,
//     partContract:
//       "Агент обязуется: Устранять выявленные Принципалом нарушения условия настоящего Договора и отступления от указаний Принципала в максимально короткие сроки, не превышающие 3 (трех) рабочих дней с момента письменного уведомления Агента о выявленных фактах нарушений.",
//     partModified:
//       "Агент обязуется: Устранять выявленные Принципалом нарушения условия настоящего Договора и отступления от указаний Принципала в максимально короткие сроки, не превышающие 5 (пяти) рабочих дней с момента письменного уведомления Агента о выявленных фактах нарушений.",
//     comment:
//       "Увеличение срока на устранение нарушений до 5 рабочих дней позволяет Агенту более тщательно и качественно устранять выявленные нарушения, что снижает риск повторных ошибок.",
//     id: null,
//   },
//   {
//     levelRisk: LevelOfCriticalEnum.LOW,
//     partContract:
//       "Принципал вправе: Изменять формы Заявлений путем направления Агенту письменного уведомления не менее чем за 10 (десять) календарных дней до даты введения новых форм.",
//     partModified:
//       "Принципал вправе: Изменять формы Заявлений путем направления Агенту письменного уведомления не менее чем за 20 (двадцать) календарных дней до даты введения новых форм.",
//     comment:
//       "Увеличение срока уведомления до 20 календарных дней позволяет Агенту более тщательно подготовиться к изменениям и избежать возможных недоразумений и ошибок при работе с новыми формами.",
//     id: null,
//   },
//   {
//     levelRisk: LevelOfCriticalEnum.LOW,
//     partContract:
//       "Принципал обязуется: Предоставлять Агенту необходимую информацию по вопросам, возникающим в процессе исполнения Договора в течение всего срока его действия.",
//     partModified:
//       "Принципал обязуется: Предоставлять Агенту необходимую информацию по вопросам, возникающим в процессе исполнения Договора в течение всего срока его действия, в срок не позднее 5 (пяти) рабочих дней с момента получения соответствующего запроса от Агента.",
//     comment:
//       "Уточнение срока предоставления информации позволяет Агенту планировать свою деятельность и избегать задержек в исполнении обязательств по Договору.",
//     id: null,
//   },
//   {
//     levelRisk: LevelOfCriticalEnum.LOW,
//     partContract:
//       "Принципал вправе: Сообщать в своих информационных материалах (web-сайт, рассылка, печатные материалы и т.д.) о возможности оформления Заявлений в торговых точках Агента.",
//     partModified:
//       "Принципал вправе: Сообщать в своих информационных материалах (web-сайт, рассылка, печатные материалы и т.д.) о возможности оформления Заявлений в торговых точках Агента, при условии предварительного согласования с Агентом содержания таких материалов.",
//     comment:
//       "Уточнение о предварительном согласовании содержания информационных материалов защищает Агента от возможных недоразумений и ошибок, связанных с некорректной информацией.",
//     id: null,
//   },
//   {
//     levelRisk: LevelOfCriticalEnum.LOW,
//     partContract:
//       "Принципал обязуется: Предоставлять Агенту всю информацию (сведения о Тарифах, инструкции, сведения о плановых и профилактических работах, сведения о причинах неработоспособности услуг и сроках восстановления), необходимую для выполнения обязательств по настоящему Договору.",
//     partModified:
//       "Принципал обязуется: Предоставлять Агенту всю информацию (сведения о Тарифах, инструкции, сведения о плановых и профилактических работах, сведения о причинах неработоспособности услуг и сроках восстановления), необходимую для выполнения обязательств по настоящему Договору, в срок не позднее 5 (пяти) рабочих дней с момента получения соответствующего запроса от Агента.",
//     comment:
//       "Уточнение срока предоставления информации позволяет Агенту планировать свою деятельность и избегать задержек в исполнении обязательств по Договору.",
//     id: null,
//   },
//   {
//     levelRisk: LevelOfCriticalEnum.LOW,
//     partContract:
//       "Принципал вправе: Корректировать размер агентского вознаграждения на сумму штрафов, начисленных в соответствии с пп.5.6 и 5.7 настоящего Договора, а также в соответствии с Приложением №2 к Договору.",
//     partModified:
//       "Принципал вправе: Корректировать размер агентского вознаграждения на сумму штрафов, начисленных в соответствии с пп.5.6 и 5.7 настоящего Договора, а также в соответствии с Приложением №2 к Договору, при условии предварительного письменного уведомления Агента о таких штрафах и предоставления ему возможности устранить нарушения в разумный срок.",
//     comment:
//       "Уточнение о предварительном уведомлении и возможности устранения нарушений защищает Агента от необоснованных штрафов и позволяет ему исправить ситуацию до применения санкций.",
//     id: null,
//   },
// ];

// export default fakeResponseAPI;
