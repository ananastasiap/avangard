import shnitkeImage from "../assets/representatives/shnitke.jpg";
import gubaidulinaImage from "../assets/representatives/sg.jpg";
import gavrilinImage from "../assets/representatives/gavrilin.jpg";
import denisovImage from "../assets/representatives/denisov.jpg";
import type { RepresentativeId } from "../types";

type Props = {
  selectedRepresentative: RepresentativeId | null;
  onRepresentativeSelect: (id: RepresentativeId) => void;
  onBackToCards: () => void;
};

function SchnittkeProfile({ onBack }: { onBack: () => void }) {
  return (
    <div className="relative z-10 flex h-full flex-col">
      <button
        type="button"
        onClick={onBack}
        className="mt-5 w-fit cursor-pointer rounded-full border border-main/12 bg-main/4 px-4 py-2 text-sm text-ink/70 transition-colors hover:bg-main/8 hover:text-main"
      >
        Вернуться к представителям
      </button>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(280px,0.85fr)_minmax(0,1.15fr)]">
        <div className="h-120 overflow-hidden rounded-[28px] border border-main/10 bg-main/5">
          <img
            src={shnitkeImage}
            alt="Альфред Шнитке"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-ink/45">
              Представитель авангарда
            </p>
            <h2 className="mt-3 text-4xl leading-tight text-main sm:text-5xl">
              Альфред Гарриевич Шнитке
            </h2>
            <p className="mt-1 text-sm text-ink/45">1934–1998</p>
          </div>

          <blockquote className="border-l-2 border-accent/30 pl-4">
            <p className="text-base leading-8 text-ink/65 italic sm:text-lg sm:leading-9">
              «Его нельзя назвать просто композитором, в нашем отечественном
              искусстве второй половины XX века он олицетворял само Время –
              именно он повернул всех нас лицом к новой музыке, заставил
              поверить в неё и всё своё творчество отдал свободе духа, которую
              мы сейчас благодаря ему получили...»
            </p>
            <footer className="mt-2 text-xs text-ink/40">
              – Виктор Екимовский
            </footer>
          </blockquote>

          <p className="text-base leading-7 text-ink/72">
            Альфред Гарриевич Шнитке (1934–1998) – один из крупнейших
            композиторов второй половины XX века, чье творчество стало
            олицетворением самой эпохи. Его музыку, унаследовавшую традиции
            Малера и Шостаковича, часто воспринимают как трагедийное размышление
            о духовной борьбе человека в современном мире, полном хаоса и
            скепсиса. Шнитке часто называют «Достоевским в музыке» за
            исключительную экспрессивность, остроту контрастов и постоянное
            пребывание в эпицентре борьбы Добра и Зла.
          </p>

          <div>
            <h3 className="text-base font-medium text-main">Мироощущение</h3>
            <div className="mt-3 grid gap-4">
              <p className="text-base leading-7 text-ink/72">
                Творчество Шнитке выросло из глубоких философских размышлений.
                Для Шнитке музыка была не просто искусством, а способом
                зафиксировать «подслушанные крики времени» (цитата Шнитке). Его
                самоощущение в этом мире было пронизано чувством трагической
                сущности бытия, которое он видел даже в повседневных мелочах: в
                накрапывающем дожде, неумолимом отсчете секунд или густеющем за
                окном мраке. Он полагал, что подлинное творчество рождается из
                ощущения несовершенства мира и желания человека «исправиться и
                очиститься» через внутренний конфликт.
              </p>
              <p className="text-base leading-7 text-ink/72">
                Стержнем его личности было острое нравственное чувство и
                «моральный закон внутри нас». Это заставляло его размышлять над
                дилеммами веры и неверия, истины и греха. Шнитке признавал
                дуализм добра и зла, считая «ошибки» необходимым двигателем
                жизни. В поздний период Шнитке пришел к убеждению, что
                композитор является лишь контактером, улавливающим музыку,
                которая изначально существует в мире во всех своих данностях.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium text-main">
              Особенности музыкального языка
            </h3>
            <p className="mt-3 text-base leading-7 text-ink/72">
              Музыкальный язык Шнитке – это грандиозный синтез, объединяющий все
              пласты человеческой культуры.
            </p>
            <ul className="mt-4 grid gap-4">
              <li className="border-l border-main/10 pl-4 text-base leading-7 text-ink/72">
                Фундаментальным методом композитора стала{" "}
                <strong className="font-medium text-ink/88">
                  полистилистика
                </strong>{" "}
                – синтез различных исторических и социальных стилей в рамках
                одного произведения. Став «визитной карточкой» композитора, этот
                метод позволял ему сталкивать «высокое» и «низкое», классику и
                джаз, возвышенные хоралы и «грязные» ресторанные танго. Для него
                это было способом отразить «стилистический калейдоскоп»
                действительности, где радио, телевизор и бит-музыка за стеной
                звучат одновременно.
              </li>
              <li className="border-l border-main/10 pl-4 text-base leading-7 text-ink/72">
                Музыкальная ткань произведений Шнитке часто пронизана
                символикой. Он использовал «мистику чисел» и темы-монограммы,
                зашифровывая в нотах имена великих предшественников или значимые
                понятия (например, 33 монограммы композиторов в Третьей
                симфонии).
              </li>
              <li className="border-l border-main/10 pl-4 text-base leading-7 text-ink/72">
                Пережив этап увлечения радикальным авангардом, Шнитке обратился
                к «новой простоте». Его музыка стала более прозрачной,
                аскетичной и созерцательной.
              </li>
              <li className="border-l border-main/10 pl-4 text-base leading-7 text-ink/72">
                Главной темой творчества Шнитке было стремление запечатлеть{" "}
                <strong className="font-medium text-ink/88">
                  современный мир в его дисгармонии
                </strong>
                , сверхтемой – столкнуть и противопоставить добро и зло.
              </li>
              <li className="border-l border-main/10 pl-4 text-base leading-7 text-ink/72">
                Композитор тесно связан как с{" "}
                <strong className="font-medium text-ink/88">русской</strong>{" "}
                (Гоголь, Достоевский), так и с{" "}
                <strong className="font-medium text-ink/88">
                  немецкой культурой
                </strong>
                , он воплотил в своем творчестве важнейшие черты русского и
                немецкого менталитета – высокую духовность, философичность,
                мятежность, сложный эмоциональный мир.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-medium text-main">
              Творческое наследие
            </h3>
            <p className="mt-3 text-base leading-7 text-ink/72">
              В своем творчестве Шнитке обращался к самым разным жанрам. Им
              написаны балеты («Лабиринты», «Пер Гюнт»), оперы («Жизнь с
              идиотом», «Джезуальдо», «История доктора Иоганна Фауста»), которые
              ставятся на сценах музыкальных театров Европы. Им создано огромное
              количество произведений для оркестра, в том числе 9 симфоний,
              концерты для различных инструментов с оркестром, Concerti grossi,
              хоровые, вокальные и камерно-инструментальные произведения. Он
              писал музыку к театральным постановкам, например, для театра на
              Таганке. С его музыкой в 1978 г. поставлены «Ревизская сказка» Н.
              Гоголя, в 1981, 1988 гг. – «Вл. Высоцкий» – поэтическое
              представление, в 1993 – «Живаго (доктор)» Б. Пастернака. Около 30
              лет композитор работал в кино.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GubaidulinaProfile({ onBack }: { onBack: () => void }) {
  return (
    <div className="relative z-10 flex h-full flex-col">
      <button
        type="button"
        onClick={onBack}
        className="mt-5 w-fit cursor-pointer rounded-full border border-main/12 bg-main/4 px-4 py-2 text-sm text-ink/70 transition-colors hover:bg-main/8 hover:text-main"
      >
        Вернуться к представителям
      </button>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(280px,0.85fr)_minmax(0,1.15fr)]">
        <div className="h-120 overflow-hidden rounded-[28px] border border-main/10 bg-main/5">
          <img
            src={gubaidulinaImage}
            alt="Софья Губайдулина"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-ink/45">
              Представитель авангарда
            </p>
            <h2 className="mt-3 text-4xl leading-tight text-main sm:text-5xl">
              Софья Асгатовна Губайдулина
            </h2>
            <p className="mt-1 text-sm text-ink/45">1931–2025</p>
          </div>

          <blockquote className="border-l-2 border-accent/30 pl-4">
            <p className="text-base leading-8 text-ink/65 italic sm:text-lg sm:leading-9">
              «Я религиозный, православный человек и религию понимаю буквально
              как re-ligio, восстановление связи, восстановление legato жизни.
              Жизнь разрывает человека на части. Он должен восстановить свою
              целостность, это и есть религия. Помимо духовного восстановления
              нет никакой более серьезной причины для сочинения музыки»
            </p>
            <footer className="mt-2 text-xs text-ink/40">
              – С.А. Губайдулина
            </footer>
          </blockquote>

          <p className="text-base leading-7 text-ink/72">
            Софья Асгатовна Губайдулина (1931–2025) – одна из наиболее
            значительных и глубоких фигур в музыке второй половины XX и начала
            XXI века. Родившись в Чистополе (Татарская АССР) в русско-татарской
            семье, она впитала традиции обеих культур, что предопределило её
            уникальный путь как «западно-восточного» композитора. Губайдулина
            сознательно избрала путь свободного художника, который в советские
            годы часто приводил к официальному неприятию и включению в «чёрные
            списки» (например, в печально известную «хренниковскую семёрку»),
            но в итоге увенчался мировым признанием и многочисленными наградами.
          </p>

          <div>
            <h3 className="text-base font-medium text-main">Мироощущение</h3>
            <div className="mt-3 grid gap-4">
              <p className="text-base leading-7 text-ink/72">
                Огромное влияние на неё оказала философия{" "}
                <strong className="font-medium text-ink/88">
                  Мартина Бубера
                </strong>
                , в частности его концепция «Я и Ты», предполагающая
                изначальную диалогичность искусства и жизни как встречи.
              </p>
              <p className="text-base leading-7 text-ink/72">
                <strong className="font-medium text-ink/88">
                  Символ креста
                </strong>{" "}
                – это центральный образ её творчества, символизирующий
                пересечение{" "}
                <strong className="font-medium text-ink/88">вертикали</strong>{" "}
                Божественного смысла и{" "}
                <strong className="font-medium text-ink/88">горизонтали</strong>{" "}
                земного времени. Крест для неё – это и символ жертвы Христа, и
                формула человеческой экзистенции (необходимость «взлетать» над
                плоскостным путем).
              </p>
              <p className="text-base leading-7 text-ink/72">
                В трудах Губайдулиной отражены идеи Николая Кузанского,
                Мейстера Экхарта, Григория Сковороды и других мыслителей.
                Творчество часто обращено к метафизическим категориям: свет и
                тьма, вечность и время, сакральное и профанное.
              </p>
              <p className="text-base leading-7 text-ink/72">
                Несмотря на трагизм мира, композитор считает, что современный
                человек «не имеет права на пессимизм», и её музыка часто
                движется к «светлому, небесному полюсу».
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium text-main">
              Музыкальный язык и его особенности
            </h3>
            <div className="mt-3 grid gap-4">
              <p className="text-base leading-7 text-ink/72">
                Стиль Губайдулиной отличается огромной эмоциональной силой и
                тончайшим ощущением выразительности звука. Одной из самых ярких
                черт её языка является{" "}
                <strong className="font-medium text-ink/88">
                  инструментальная символика
                </strong>
                . Например, противопоставление вибрато (как символа земного,
                человеческого) и флажолетов (как символа небесного, духовного).
                Она часто использует инструменты как персонажей драмы, наделяя
                их почти человеческими голосами, способными «вздыхать» или
                «кричать».{" "}
                <strong className="font-medium text-ink/88">
                  Символика креста
                </strong>{" "}
                – одна из главных в произведениях композитора. Ею наделяются
                многие композиционные элементы. Например, в произведении «In
                croce» для виолончели и органа, Губайдулина использует встречное
                движение высокого и низкого регистров, образуя «регистровый
                крест».
              </p>
              <p className="text-base leading-7 text-ink/72">
                Важнейшим конструктивным принципом для Губайдулиной стала{" "}
                <strong className="font-medium text-ink/88">
                  «магия чисел»
                </strong>
                . Она часто организует ритм и форму своих произведений на основе
                числовых рядов Фибоначчи и Люка, считая такие пропорции
                «консонансными» и природными. В её партитурах{" "}
                <strong className="font-medium text-ink/88">тишина</strong> и
                паузы так же важны, как и звучание. В симфонии «Слышу...
                Умолкло...» центральным событием становится соло дирижёра в
                полной тишине. Композитор также активно экспериментировала с
                четвертитоновой системой и микрохроматикой.
              </p>
              <p className="text-base leading-7 text-ink/72">
                Звуковой мир Губайдулиной дополняется{" "}
                <strong className="font-medium text-ink/88">
                  необычными тембровыми сочетаниями
                </strong>
                : она смело объединяет баян, орган и ударные со старинными или
                восточными инструментами, такими как цимбалы и чанг. В её
                арсенале находятся и конкретные{" "}
                <strong className="font-medium text-ink/88">
                  звуковые эффекты
                </strong>{" "}
                – от скрежета картона до шепота оркестрантов и мультифоников
                флейты. При этом, в отличие от многих современников, композитор
                продолжает использовать классическую форму сонаты как идеальный
                носитель драматического контраста.
              </p>
              <p className="text-base leading-7 text-ink/72">
                Творчество Губайдулиной представляет собой самобытную
                художественную вселенную, которую невозможно вписать в рамки
                какого-либо одного «изма» (авангардизм, неоклассицизм,
                минимализм и пр.). Губайдулина остается вне школ и направлений,
                опираясь на индивидуальный метод.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GavrilinProfile({ onBack }: { onBack: () => void }) {
  return (
    <div className="relative z-10 flex h-full flex-col">
      <button
        type="button"
        onClick={onBack}
        className="mt-5 w-fit cursor-pointer rounded-full border border-main/12 bg-main/4 px-4 py-2 text-sm text-ink/70 transition-colors hover:bg-main/8 hover:text-main"
      >
        Вернуться к представителям
      </button>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(280px,0.85fr)_minmax(0,1.15fr)]">
        <div className="h-120 overflow-hidden rounded-[28px] border border-main/10 bg-main/5">
          <img
            src={gavrilinImage}
            alt="Валерий Гаврилин"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-ink/45">
              Представитель авангарда
            </p>
            <h2 className="mt-3 text-4xl leading-tight text-main sm:text-5xl">
              Валерий Александрович Гаврилин
            </h2>
            <p className="mt-1 text-sm text-ink/45">1939–1999</p>
          </div>

          <blockquote className="border-l-2 border-accent/30 pl-4">
            <p className="text-base leading-8 text-ink/65 italic sm:text-lg sm:leading-9">
              «Музыка Гаврилина вся, от первой до последней ноты, напоена
              русским мелосом, чистота её стиля поразительна. Органическое,
              сыновнее чувство Родины – драгоценное свойство этой музыки, её
              сердцевина. Из песен и хоров Гаврилина встаёт вольная, перезвонная
              Русь. …Это написано кровью сердца – живая, современная музыка
              глубоко народного склада и, самое главное, современного
              мироощущения, рождённая здесь, на наших просторах»
            </p>
            <footer className="mt-2 text-xs text-ink/40">– Г. В. Свиридов</footer>
          </blockquote>

          <p className="text-base leading-7 text-ink/72">
            Валерий Александрович Гаврилин (1939–1999) – советский и
            российский композитор, чье творчество неразрывно связано с{" "}
            <strong className="font-medium text-ink/88">
              русской национальной культурой
            </strong>{" "}
            и глубоким пониманием народного духа. Гаврилин является
            представителем поколения композиторов{" "}
            <strong className="font-medium text-ink/88">
              «Новая фольклорная волна»
            </strong>
            , а также последователем Георгия Васильевича Свиридова.
          </p>

          <div>
            <h3 className="text-base font-medium text-main">Мироощущение</h3>
            <p className="mt-3 text-base leading-7 text-ink/72">
              Главной чертой Гаврилина была редкая способность чувствовать
              чужую боль как свою. Все творчество композитора пронизано высокой
              духовностью. Своей музыкой Гаврилин стремился «добраться до
              каждой человеческой души». Несмотря на трагизм многих образов,
              композитор верил, что в мире всегда будут существовать{" "}
              <strong className="font-medium text-ink/88">
                «красота, совесть и надежда»
              </strong>
              . Его музыка всегда несет доброту и свет. В своем искусстве
              Гаврилин воплощал{" "}
              <strong className="font-medium text-ink/88">
                ранимость, незащищенность и деликатность
              </strong>{" "}
              человека.
            </p>
          </div>

          <div>
            <h3 className="text-base font-medium text-main">
              Особенности музыкального языка
            </h3>
            <div className="mt-3 grid gap-4">
              <p className="text-base leading-7 text-ink/72">
                Композитор внес в своё творчество всю духовную красоту России:
                трепетность, нежность и тонкость. Огромное влияние на него
                оказал родной{" "}
                <strong className="font-medium text-ink/88">
                  Вологодский край
                </strong>
                . Детство Гаврилина пришлось на{" "}
                <strong className="font-medium text-ink/88">военные годы</strong>
                , и первыми музыкальными впечатлениями стали крики и плач
                женщин, получавших похоронки с фронта. Из этих глубин в его
                сочинения пришли народные колыбельные, плачи, частушки и
                наигрыши.
              </p>
              <p className="text-base leading-7 text-ink/72">
                Сам композитор считал главной темой своего творчества{" "}
                <strong className="font-medium text-ink/88">
                  «тему женской судьбы»
                </strong>
                :
              </p>
              <blockquote className="border-l border-main/10 pl-4 text-base leading-7 text-ink/60 italic">
                «С самого детства, сколько себя помню, я видел мир, отраженный
                в женщинах. Военная деревня – это женщины, детский дом – это
                женщины, матери без сыновей, жены без мужей, сестры без
                братьев. Благодаря им я выжил, стал таким, какой есть, и долго
                еще смотрел на мир их глазами, через их заботы, слезы, труд.
                Меня поражало и поражает терпение, с каким они несут свою ношу,
                которую нам, мужчинам, может быть, и не стащить. Я много думал
                об этом и так или иначе рассказывал». – В.А. Гаврилин
              </blockquote>
              <p className="text-base leading-7 text-ink/72">
                Важным этапом стали{" "}
                <strong className="font-medium text-ink/88">
                  фольклорные экспедиции
                </strong>{" "}
                (в частности, по Псковской земле), которые композитор называл
                «возвращением в детство». Его язык глубоко народен: он
                мастерски сочетал «говор деревенских людей» с достижениями
                музыкальной классики и даже «низкими» бытовыми жанрами –
                мещанским романсом, частушкой.
              </p>
              <p className="text-base leading-7 text-ink/72">
                По мнению музыковеда А. Сохора в творчестве Гаврилина
                выработался новый тип жанра «песенно-симфонический». Для его
                мышления характерны{" "}
                <strong className="font-medium text-ink/88">
                  зрелищность и образная конкретность
                </strong>
                . Он разработал особый жанр{" "}
                <strong className="font-medium text-ink/88">«действа»</strong>,
                в котором объединяются признаки оратории, оперы, балета и
                драматического спектакля.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium text-main">
              Творческое наследие
            </h3>
            <p className="mt-3 text-base leading-7 text-ink/72">
              Оперы («Пещное действо» и др.), балеты («Анюта», «Женитьба
              Бальзаминова» и др), симфоническая (сюиты, дивертисменты),
              камерно-инструментальная (квартеты, сонаты, «Зарисовки» – цикл
              программных пьес) и камерно-вокальная музыка (вокальные циклы на
              слова Г. Гейне, У. Шекспира в переводе Б. Пастернака, М.
              Цветаевой, С. Есенина, И. Бунина, А. Ахматовой, А. Шульгиной, на
              народные тексты), вокально-симфонические («Перезвоны»,
              «Скоморохи», «Военные письма», «Земля», «Свадьба» и др.), хоровые
              a'cappella («Памяти павших», «Припевки», «Мы говорили об
              искусстве» и др.), музыка к спектаклям («Преступление и
              наказание», «С любимыми не расставайтесь» и др.), музыка к к/ф.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DenisovProfile({ onBack }: { onBack: () => void }) {
  return (
    <div className="relative z-10 flex h-full flex-col">
      <button
        type="button"
        onClick={onBack}
        className="mt-5 w-fit cursor-pointer rounded-full border border-main/12 bg-main/4 px-4 py-2 text-sm text-ink/70 transition-colors hover:bg-main/8 hover:text-main"
      >
        Вернуться к представителям
      </button>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(280px,0.85fr)_minmax(0,1.15fr)]">
        <div className="h-120 overflow-hidden rounded-[28px] border border-main/10 bg-main/5">
          <img
            src={denisovImage}
            alt="Эдисон Денисов"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-ink/45">
              Представитель авангарда
            </p>
            <h2 className="mt-3 text-4xl leading-tight text-main sm:text-5xl">
              Эдисон Васильевич Денисов
            </h2>
            <p className="mt-1 text-sm text-ink/45">1929–1996</p>
          </div>

          <div className="grid gap-4">
            <blockquote className="border-l-2 border-accent/30 pl-4">
              <p className="text-base leading-8 text-ink/65 italic sm:text-lg sm:leading-9">
                «Красота – одно из важнейших понятий в искусстве. Сегодня многие
                композиторы, похоже, ищут новую красоту. И речь не только о
                красоте звука, которая не имеет ничего общего с красотой
                внешнего вида. Я говорю о красоте мысли, как ее понимают,
                например, математики, или как ее понимали Бах и Веберн…»
              </p>
              <footer className="mt-2 text-xs text-ink/40">– Э.В. Денисов</footer>
            </blockquote>
            <blockquote className="border-l-2 border-accent/30 pl-4">
              <p className="text-base leading-8 text-ink/65 italic sm:text-lg sm:leading-9">
                «Нетленная красота великих творений искусства живет в своем
                временном измерении, становясь высшей реальностью»
              </p>
              <footer className="mt-2 text-xs text-ink/40">– Э.В. Денисов</footer>
            </blockquote>
          </div>

          <p className="text-base leading-7 text-ink/72">
            Эдисон Васильевич Денисов (1929–1996) – выдающийся композитор и
            один из лидеров советского авангарда. Он принадлежал к
            художественному поколению 60-х годов, для которого определяющей
            была идея{" "}
            <strong className="font-medium text-ink/88">духовной свободы</strong>
            , обретаемой через новейшие методы музыкальной композиции.
          </p>

          <div>
            <h3 className="text-base font-medium text-main">Мироощущение</h3>
            <div className="mt-3 grid gap-4">
              <p className="text-base leading-7 text-ink/72">
                Для Денисова музыка также была сродни религии («я думаю, что
                большинство моих сочинений – это в полном смысле сочинения
                духовные»), и он также отдал определенную дань тенденции
                отделять сакральное от профанного и стилизовать его в
                ретроспективном ключе. Денисов был убежденным сторонником{" "}
                <strong className="font-medium text-ink/88">
                  чистоты стиля
                </strong>{" "}
                и называл себя{" "}
                <strong className="font-medium text-ink/88">
                  «явным контр-полистилистом»
                </strong>
                , выступая против смешения разнородных стилистических
                элементов, которое практиковал, например, Альфред Шнитке.
                Искусство Денисова духовно родственно русской классической
                традиции (Пушкин, Тургенев, Толстой) и противостоит тенденциям
                упрощенчества и «поп-мышления».
              </p>
              <div>
                <p className="text-base leading-7 text-ink/72">
                  Его эстетическая концепция строится на трёх понятиях:
                </p>
                <ul className="mt-3 grid gap-3">
                  {[
                    [
                      "Свет",
                      "духовное сияние, которое художник обязан нести людям.",
                    ],
                    [
                      "Пластика",
                      "естественность изложения, отсутствие «торчащих углов» и «механического монтажа».",
                    ],
                    [
                      "Чистота",
                      "ясность концепции, свобода от «мусора в мыслительных процессах» и потакания низким вкусам.",
                    ],
                  ].map(([term, def]) => (
                    <li
                      key={term}
                      className="border-l border-main/10 pl-4 text-base leading-7 text-ink/72"
                    >
                      <strong className="font-medium text-ink/88">{term}</strong>{" "}
                      – {def}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium text-main">
              Особенности музыкального языка
            </h3>
            <div className="mt-3 grid gap-4">
              <p className="text-base leading-7 text-ink/72">
                В стиле Денисова исследователи выделяют систему из десяти
                основных элементов (идиом):
              </p>
              <ol className="grid gap-2">
                {[
                  "«Высокая лирика»",
                  "«Лирическая вязь»",
                  "«Стрельба» и «уколы» (ритмизованные точки)",
                  "«Россыпи» точек и пуантилистические всплески",
                  "«Шорохи» и «гладкие нити»",
                  "«Соноры-дублировки», миксты, кластеры",
                  "«Соноры-массы»",
                  "Алеаторика",
                  "Традиционные художественные жанры (включая отсылки к джазу и классике, что иногда допускает нарушение стилистической чистоты)",
                  "Экспрессивные атональные линии, восходящие к нововенской школе, Булезу и Ноно",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-base leading-7 text-ink/72"
                  >
                    <span className="shrink-0 text-ink/30">{i + 1}.</span>
                    {item}
                  </li>
                ))}
              </ol>
              <p className="text-base leading-7 text-ink/72">
                Звуковысотная организация во всех этих идиомах не допускает
                прямых ассоциаций с тональной гармонией, а в ритмике избегается
                размеренная акцентность, поощряются полиритмия и нерегулярность.
              </p>
              <p className="text-base leading-7 text-ink/72">
                Важное место занимали{" "}
                <strong className="font-medium text-ink/88">
                  символические темы
                </strong>
                : использование буквенной монограммы Шостаковича (DSCH) и
                собственной монограммы (EDS – EDiSon DEniSov). Несмотря на
                новаторство, Денисов сохранял глубокую связь с русским
                фольклором, переосмысляя его без прямого цитирования или
                использования стилизации.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium text-main">
              Творческое наследие
            </h3>
            <p className="mt-3 mb-3 text-base leading-7 text-ink/72">
              Наследие композитора охватывает самые разные жанры, от камерных до
              монументальных:
            </p>
            <ol className="grid gap-4">
              {[
                [
                  "Сценические жанры",
                  "оперы «Пена дней», «Четыре девушки», «Иван-солдат» и балет «Исповедь», в основе которых лежат романтические лирические сюжеты.",
                ],
                [
                  "Симфоническая и концертная музыка",
                  "две симфонии, более десяти инструментальных концертов (скрипичный, виолончельный, фортепианный и др.), а также «Живопись» для оркестра.",
                ],
                [
                  "Вокально-инструментальные произведения",
                  "этапная кантата «Солнце инков», цикл «Плачи» на народные тексты и «Голубая тетрадь» на стихи Хармса и Введенского, вокальные циклы «Листья», «Боль и тишина», «На повороте» и др.",
                ],
                [
                  "Духовная и философская музыка",
                  "вершиной творчества 70-х стал «Реквием» (философская поэма о жизни человека), а в 80–90-е годы преобладала религиозная тематика («Свете тихий», «Рождественская звезда», «История жизни и смерти Господа нашего Иисуса Христа»).",
                ],
                [
                  "Синтез музыки и живописи",
                  "в 70-х годах появились «Силуэты» для флейты, фортепиано и ударных, «Живопись» для симфонического оркестра, «Знаки на белом» для фортепиано, «Акварели» для 24 струнных и др.",
                ],
              ].map(([title, desc], i) => (
                <li key={i} className="flex gap-3 text-base leading-7 text-ink/72">
                  <span className="shrink-0 text-ink/30">{i + 1}.</span>
                  <span>
                    <strong className="font-medium text-ink/88">{title}:</strong>{" "}
                    {desc}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

function RepresentativesPage({
  selectedRepresentative,
  onRepresentativeSelect,
  onBackToCards,
}: Props) {
  if (selectedRepresentative === "schnittke") {
    return <SchnittkeProfile onBack={onBackToCards} />;
  }

  if (selectedRepresentative === "gubaidulina") {
    return <GubaidulinaProfile onBack={onBackToCards} />;
  }

  if (selectedRepresentative === "gavrilin") {
    return <GavrilinProfile onBack={onBackToCards} />;
  }

  if (selectedRepresentative === "denisov") {
    return <DenisovProfile onBack={onBackToCards} />;
  }

  return (
    <div className="relative z-10 flex h-full flex-col">
      <h2 className="mt-5 text-4xl leading-tight text-main sm:text-5xl lg:text-6xl">
        Представители
        <br />
        авангарда
      </h2>

      <p className="mt-6 max-w-[58ch] text-lg leading-8 text-ink/72">
        Здесь будет представлен список ключевых фигур музыкального авангарда —
        композиторов, исполнителей и теоретиков, определивших облик эпохи.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {(
          [
            {
              id: "schnittke",
              img: shnitkeImage,
              name: "Альфред Шнитке",
              meta: "СССР / Германия · 1934–1998 · полистилистика",
            },
            {
              id: "gubaidulina",
              img: gubaidulinaImage,
              name: "Софья Губайдулина",
              meta: "СССР / Германия · 1931–2025 · духовный авангард",
            },
            {
              id: "gavrilin",
              img: gavrilinImage,
              name: "Валерий Гаврилин",
              meta: "СССР · 1939–1999 · новая фольклорная волна",
            },
            {
              id: "denisov",
              img: denisovImage,
              name: "Эдисон Денисов",
              meta: "СССР · 1929–1996 · советский авангард",
            },
          ] as const
        ).map(({ id, img, name, meta }) => (
          <button
            key={id}
            type="button"
            onClick={() => onRepresentativeSelect(id)}
            className="group cursor-pointer rounded-2xl border border-main/10 bg-main/5 p-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/20 hover:bg-main/7"
          >
            <img
              src={img}
              alt={name}
              className="h-12 w-12 rounded-full object-cover object-center"
            />
            <p className="mt-4 text-base font-medium text-ink/88">{name}</p>
            <p className="mt-1 text-sm leading-6 text-ink/50">{meta}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-accent/70 transition-colors group-hover:text-accent">
              Открыть страницу
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default RepresentativesPage;
