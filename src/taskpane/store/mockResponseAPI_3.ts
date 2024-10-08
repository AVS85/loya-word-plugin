/** NDA_шаблон.docx */

import { ContractRecommendationResponseT } from "../api/v1/contract";
import { LevelOfCriticalEnum } from "../enums";
const fakeResponseAPI: ContractRecommendationResponseT[] = [
  {
    levelRisk: LevelOfCriticalEnum.LOW,
    partContract:
      "В случае копирования Получающей Стороной любых материалов, документов или файлов, содержащих Конфиденциальную информацию, Получающая Сторона обязана обеспечить уничтожение таких копий до степени невозможности восстановления либо передать их Передающей Стороне по выбору последней, кроме случаев, когда необходимость сохранения одного экземпляра такого носителя Конфиденциальной информации предусмотрена требованиями законодательства Российской Федерации.",
    partModified:
      "В случае копирования Получающей Стороной любых материалов, документов или файлов, содержащих Конфиденциальную информацию, Получающая Сторона обязана обеспечить уничтожение таких копий до степени невозможности восстановления либо передать их Передающей Стороне по выбору последней, кроме случаев, когда необходимость сохранения одного экземпляра такого носителя Конфиденциальной информации предусмотрена требованиями законодательства Российской Федерации или договором между Сторонами.",
    comment:
      "Включение условия о возможности сохранения копий Конфиденциальной информации по договору между Сторонами позволяет учитывать специфические потребности и договоренности, которые могут возникнуть в процессе сотрудничества.",
    id: null,
    type: "edit",
  },
  {
    levelRisk: LevelOfCriticalEnum.LOW,
    partContract:
      "Стороны проинформированы о требованиях Федерального закона от 27.07.2010 №224-ФЗ «О противодействии неправомерному использованию инсайдерской информации и манипулированию рынком и о внесении изменений в отдельные законодательные акты Российской Федерации», принятых в соответствии с ним нормативных актах Банка России и об ответственности за неправомерное использование инсайдерской информации, а также о том, что получающая инсайдерскую информацию Сторона будет включена в список инсайдеров передающей инсайдерскую информацию Стороны в установленном действующим законодательством Российской Федерации порядке.",
    partModified:
      "Стороны проинформированы о требованиях Федерального закона от 27.07.2010 №224-ФЗ «О противодействии неправомерному использованию инсайдерской информации и манипулированию рынком и о внесении изменений в отдельные законодательные акты Российской Федерации», принятых в соответствии с ним нормативных актах Банка России и об ответственности за неправомерное использование инсайдерской информации, а также о том, что получающая инсайдерскую информацию Сторона будет включена в список инсайдеров передающей инсайдерскую информацию Стороны в установленном действующим законодательством Российской Федерации порядке. Получающая сторона обязуется соблюдать все требования, предусмотренные указанным законом и нормативными актами.",
    comment:
      "Дополнение условия обязательством соблюдать требования законодательства усиливает правовую защиту и подчеркивает ответственность Получающей стороны за соблюдение норм.",
    id: null,
    type: "edit",
  },
  {
    levelRisk: LevelOfCriticalEnum.LOW,
    partContract:
      "Получающая сторона обязана продолжать соблюдать Режим защиты Конфиденциальной информации в случаях, предусмотренных п.5.2.1-5.2.3 настоящего Соглашения, при наличии ограничений по использованию Конфиденциальной информации, установленных законодательством Российской Федерации.",
    partModified:
      "Получающая сторона обязана продолжать соблюдать Режим защиты Конфиденциальной информации в случаях, предусмотренных п.5.2.1-5.2.3 настоящего Соглашения, при наличии ограничений по использованию Конфиденциальной информации, установленных законодательством Российской Федерации и настоящим Соглашением.",
    comment:
      "Уточнение, что ограничения могут быть установлены не только законодательством, но и самим Соглашением, позволяет учитывать все возможные условия конфиденциальности.",
    id: null,
    type: "edit",
  },
  {
    levelRisk: LevelOfCriticalEnum.LOW,
    partContract:
      "Получающая сторона, допустившая разглашение Конфиденциальной информации и/или нарушение условий настоящего Соглашения в части Режима защиты Конфиденциальной информации, уплачивает по требованию Передающей стороны неустойку (штраф) в размере: 500 000 (пятисот тысяч) российских рублей за каждый случай нарушения, в случае если действия Получающей стороны привели к нарушению требований настоящего Соглашения, но не повлекли за собой разглашение Конфиденциальной информации. 500 000 (пятисот тысяч) российских рублей за каждый случай нарушения, в случае если действия Получающей стороны привели к нарушению требований настоящего Соглашения и повлекли за собой разглашение Конфиденциальной информации.",
    partModified:
      "Получающая сторона, допустившая разглашение Конфиденциальной информации и/или нарушение условий настоящего Соглашения в части Режима защиты Конфиденциальной информации, уплачивает по требованию Передающей стороны неустойку (штраф) в размере: 500 000 (пятисот тысяч) российских рублей за каждый случай нарушения, в случае если действия Получающей стороны привели к нарушению требований настоящего Соглашения, но не повлекли за собой разглашение Конфиденциальной информации. 1 000 000 (одного миллиона) российских рублей за каждый случай нарушения, в случае если действия Получающей стороны привели к нарушению требований настоящего Соглашения и повлекли за собой разглашение Конфиденциальной информации.",
    comment:
      "Увеличение штрафа за разглашение Конфиденциальной информации до 1 000 000 рублей усиливает защиту Передающей стороны и стимулирует Получающую сторону к более строгому соблюдению условий конфиденциальности.",
    id: null,
    type: "edit",
  },
  {
    levelRisk: LevelOfCriticalEnum.LOW,
    partContract:
      "В случае изменения действующего законодательства Российской Федерации недействительность или невозможность применения какой-либо части настоящего Соглашения не будет влиять на действительность или возможность исполнения другой части настоящего Соглашения, которая будет оставаться в силе и выполняться.",
    partModified:
      "В случае изменения действующего законодательства Российской Федерации недействительность или невозможность применения какой-либо части настоящего Соглашения не будет влиять на действительность или возможность исполнения другой части настоящего Соглашения, которая будет оставаться в силе и выполняться. Стороны обязуются в кратчайшие сроки внести необходимые изменения в Соглашение для приведения его в соответствие с изменившимся законодательством.",
    comment:
      "Включение обязательства по внесению изменений в Соглашение в случае изменения законодательства обеспечивает его актуальность и соответствие правовым нормам.",
    id: null,
    type: "edit",
  },
  {
    levelRisk: LevelOfCriticalEnum.LOW,
    partContract:
      "Стороны обязуются соблюдать конфиденциальность в отношении полученных персональных данных, обеспечивать безопасность персональных данных при их обработке, соблюдать принципы и правила обработки персональных данных, предусмотренные Федеральным законом от 27.07.2006 №152-ФЗ «О персональных данных», другими нормативными и иными правовыми актами в сфере защиты персональных данных. Стороны обязуются принимать необходимые правовые, организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа к ним, уничтожения, изменения, блокирования, копирования, предоставления, распространения персональных данных, а также от иных неправомерных действий в отношении персональных данных, а также соблюдать требования к защите обрабатываемых персональных данных в соответствии со ст. 18.1 и ст. 19 Федерального закона от 27.07.2006 №152-ФЗ «О персональных данных».",
    partModified:
      "Стороны обязуются соблюдать конфиденциальность в отношении полученных персональных данных, обеспечивать безопасность персональных данных при их обработке, соблюдать принципы и правила обработки персональных данных, предусмотренные Федеральным законом от 27.07.2006 №152-ФЗ «О персональных данных», другими нормативными и иными правовыми актами в сфере защиты персональных данных. Стороны обязуются принимать необходимые правовые, организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа к ним, уничтожения, изменения, блокирования, копирования, предоставления, распространения персональных данных, а также от иных неправомерных действий в отношении персональных данных, а также соблюдать требования к защите обрабатываемых персональных данных в соответствии со ст. 18.1 и ст. 19 Федерального закона от 27.07.2006 №152-ФЗ «О персональных данных». Стороны обязуются уведомлять друг друга о любых инцидентах, связанных с нарушением безопасности персональных данных, в течение 24 часов с момента их обнаружения.",
    comment:
      "Включение обязательства по уведомлению о нарушениях безопасности персональных данных в течение 24 часов позволяет оперативно реагировать на инциденты и минимизировать возможные риски.",
    id: null,
    type: "edit",
  },
  {
    levelRisk: LevelOfCriticalEnum.LOW,
    partContract:
      "В случае привлечения Стороны к ответственности в связи с действиями/бездействием другой Стороны при обработке персональных данных субъектов персональных данных, полученных или передаваемых при исполнении обязательств по настоящему Соглашению, другая Сторона обязуется возместить Стороне реальный документально подтвержденный ущерб, понесенный Стороной в результате таких действий/бездействия другой Стороны.",
    partModified:
      "В случае привлечения Стороны к ответственности в связи с действиями/бездействием другой Стороны при обработке персональных данных субъектов персональных данных, полученных или передаваемых при исполнении обязательств по настоящему Соглашению, другая Сторона обязуется возместить Стороне реальный документально подтвержденный ущерб, понесенный Стороной в результате таких действий/бездействия другой Стороны. Возмещение ущерба должно быть произведено в течение 30 календарных дней с момента предъявления соответствующего требования.",
    comment:
      "Установление срока для возмещения ущерба обеспечивает своевременное исполнение обязательств и минимизирует финансовые риски для пострадавшей стороны.",
    id: null,
    type: "edit",
  },
  {
    levelRisk: LevelOfCriticalEnum.LOW,
    partContract:
      "В случае изменения действующего законодательства Российской Федерации недействительность или невозможность применения какой-либо части настоящего Соглашения не будет влиять на действительность или возможность исполнения другой части настоящего Соглашения, которая будет оставаться в силе и выполняться.",
    partModified:
      "В случае изменения действующего законодательства Российской Федерации недействительность или невозможность применения какой-либо части настоящего Соглашения не будет влиять на действительность или возможность исполнения другой части настоящего Соглашения, которая будет оставаться в силе и выполняться. Стороны обязуются в кратчайшие сроки внести необходимые изменения в Соглашение для приведения его в соответствие с изменившимся законодательством.",
    comment:
      "Включение обязательства по внесению изменений в Соглашение в случае изменения законодательства обеспечивает его актуальность и соответствие правовым нормам.",
    id: null,
    type: "edit",
  },
  {
    levelRisk: LevelOfCriticalEnum.LOW,
    partContract:
      "Стороны обязуются соблюдать конфиденциальность в отношении полученных персональных данных, обеспечивать безопасность персональных данных при их обработке, соблюдать принципы и правила обработки персональных данных, предусмотренные Федеральным законом от 27.07.2006 №152-ФЗ «О персональных данных», другими нормативными и иными правовыми актами в сфере защиты персональных данных. Стороны обязуются принимать необходимые правовые, организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа к ним, уничтожения, изменения, блокирования, копирования, предоставления, распространения персональных данных, а также от иных неправомерных действий в отношении персональных данных, а также соблюдать требования к защите обрабатываемых персональных данных в соответствии со ст. 18.1 и ст. 19 Федерального закона от 27.07.2006 №152-ФЗ «О персональных данных».",
    partModified:
      "Стороны обязуются соблюдать конфиденциальность в отношении полученных персональных данных, обеспечивать безопасность персональных данных при их обработке, соблюдать принципы и правила обработки персональных данных, предусмотренные Федеральным законом от 27.07.2006 №152-ФЗ «О персональных данных», другими нормативными и иными правовыми актами в сфере защиты персональных данных. Стороны обязуются принимать необходимые правовые, организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа к ним, уничтожения, изменения, блокирования, копирования, предоставления, распространения персональных данных, а также от иных неправомерных действий в отношении персональных данных, а также соблюдать требования к защите обрабатываемых персональных данных в соответствии со ст. 18.1 и ст. 19 Федерального закона от 27.07.2006 №152-ФЗ «О персональных данных». Стороны обязуются уведомлять друг друга о любых инцидентах, связанных с нарушением безопасности персональных данных, в течение 24 часов с момента их обнаружения.",
    comment:
      "Включение обязательства по уведомлению о нарушениях безопасности персональных данных в течение 24 часов позволяет оперативно реагировать на инциденты и минимизировать возможные риски.",
    id: null,
    type: "edit",
  },
  {
    levelRisk: LevelOfCriticalEnum.LOW,
    partContract:
      "В случае привлечения Стороны к ответственности в связи с действиями/бездействием другой Стороны при обработке персональных данных субъектов персональных данных, полученных или передаваемых при исполнении обязательств по настоящему Соглашению, другая Сторона обязуется возместить Стороне реальный документально подтвержденный ущерб, понесенный Стороной в результате таких действий/бездействия другой Стороны.",
    partModified:
      "В случае привлечения Стороны к ответственности в связи с действиями/бездействием другой Стороны при обработке персональных данных субъектов персональных данных, полученных или передаваемых при исполнении обязательств по настоящему Соглашению, другая Сторона обязуется возместить Стороне реальный документально подтвержденный ущерб, понесенный Стороной в результате таких действий/бездействия другой Стороны. Возмещение ущерба должно быть произведено в течение 30 календарных дней с момента предъявления соответствующего требования.",
    comment:
      "Установление срока для возмещения ущерба обеспечивает своевременное исполнение обязательств и минимизирует финансовые риски для пострадавшей стороны.",
    id: null,
    type: "edit",
  },
];

export default fakeResponseAPI;
