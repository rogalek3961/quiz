const questions = [
  {
    "question": "Podstawa zatrudnienia w projekcie powinna być uzasadniona:",
    "answers": [
      "funkcją",
      "wygodą organizacyjną",
      "decyzją osoby zatrudnianej",
      ""
    ],
    "correct": 0,
    "explanation": "Podstawa zatrudnienia w projekcie powinna wynikać z rzeczywistego charakteru wykonywanych obowiązków. O wyborze rodzaju umowy nie decydują preferencje pracownika ani wygoda organizacyjna beneficjenta, lecz sposób wykonywania zadań. Jeżeli osoba wykonuje pracę pod kierownictwem pracodawcy, w określonym miejscu i czasie, zasadna jest umowa o pracę. Celem tej zasady jest zapewnienie zgodności z przepisami prawa pracy oraz uniknięcie nieprawidłowości podczas kontroli projektu."
  },
  {
    "question": "Zasada, zgodnie z którą „podstawa zatrudnienia odpowiada rzeczywistości”",
    "answers": [
      "doznaje licznych wyjątków w zależności od praktyki",
      "jest stosowana bezwzględnie",
      "nie istnieje",
      ""
    ],
    "correct": 1,
    "explanation": "Zasada zgodności podstawy zatrudnienia z rzeczywistym sposobem wykonywania pracy ma charakter bezwzględny. Instytucje kontrolujące oceniają faktyczne warunki wykonywania obowiązków, a nie samą nazwę zawartej umowy. Próba zastępowania stosunku pracy umowami cywilnoprawnymi bez uzasadnienia może zostać uznana za naruszenie zasad kwalifikowalności wydatków i skutkować korektą finansową."
  },
  {
    "question": "Pracownik projektu i pracownik jednostki realizującej projekt",
    "answers": [
      "to zawsze ta sama osoba",
      "to nigdy ta sama osoba",
      "to czasem ta sama osoba",
      ""
    ],
    "correct": 2,
    "explanation": "W praktyce realizacji projektów bardzo często pracownik jednostki realizującej projekt wykonuje jednocześnie zadania projektowe. Kluczowe znaczenie ma prawidłowe przypisanie czasu pracy oraz właściwe rozliczenie kosztów związanych z realizacją projektu. Sama okoliczność pełnienia dwóch ról nie stanowi naruszenia przepisów, pod warunkiem zachowania przejrzystości rozliczeń."
  },
  {
    "question": "Czy czas urlopu przypadający poza okresem realizacji projektu jest kosztem kwalifikowanym?",
    "answers": [
      "nie",
      "tak, w przypadku urlopu, który został zaplanowany w porozumieniu z kierownikiem projektu",
      "zależy od rodzaju projektu",
      ""
    ],
    "correct": 0,
    "explanation": "Koszty kwalifikowane mogą być ponoszone wyłącznie w okresie kwalifikowalności projektu. Jeżeli urlop przypada po zakończeniu realizacji projektu, koszt wynagrodzenia za ten okres nie pozostaje w związku z działaniami projektowymi. W konsekwencji taki wydatek nie może zostać rozliczony w ramach projektu i powinien zostać pokryty ze środków własnych beneficjenta."
  },
  {
    "question": "Koszty osobowe w projekcie to wydatki ponoszone na rzecz:",
    "answers": [
      "osób realizujących projekt - pracowników, zleceniobiorców, wykonawców, ekspertów; obejmują zarówno świadczenia bezpośrednio związane z realizacją zadań projektowych",
      "osób realizujących projekt – pracowników",
      "osób realizujących projekt - pracowników, zleceniobiorców, wykonawców, ekspertów; obejmują zarówno świadczenia bezpośrednio i pośrednio związane z realizacją zadań projektowych",
      ""
    ],
    "correct": 2,
    "explanation": "Koszty osobowe obejmują nie tylko wynagrodzenie zasadnicze, ale również składki na ubezpieczenia społeczne, dodatki, urlopy oraz inne świadczenia wynikające z zatrudnienia osób zaangażowanych w projekt. Warunkiem kwalifikowalności jest bezpośredni związek tych kosztów z realizacją zadań projektowych. Definicja kosztów osobowych jest więc szersza niż samo wynagrodzenie wypłacane pracownikowi."
  },
  {
    "question": "Sposób prowadzenia wyodrębnionej ewidencji księgowej projektu:",
    "answers": [
      "jest określony w ustawie z 29 września 1994 r. o rachunkowości",
      "zwykle zależy od typu podmiotu, tzn. jest inny dla jednostek prowadzących pełną księgowość i jednostek nieprowadzących pełnej księgowości",
      "polega na prowadzeniu zestawienie wydatków w systemie informatycznym CST2021",
      "jest dokładnie taki sam dla wszystkich projektów unijnych w perspektywie 2021-2027"
    ],
    "correct": 1,
    "explanation": "Przepisy wymagają prowadzenia wyodrębnionej ewidencji księgowej projektu, jednak sposób jej organizacji zależy od formy prawnej i systemu rachunkowości stosowanego przez beneficjenta. Inne rozwiązania stosują jednostki sektora finansów publicznych, a inne przedsiębiorcy czy organizacje pozarządowe. Najważniejsze jest zapewnienie możliwości jednoznacznej identyfikacji wszystkich operacji związanych z projektem."
  },
  {
    "question": "Polityka rachunkowości podmiotu realizującego projekt unijny:",
    "answers": [
      "co do zasady podlega aktualizacji w związku z rozpoczęciem realizacji projektu",
      "jest elastyczna i zwykle nie wymaga aktualizacji w związku z rozpoczęciem realizacji projektu",
      "zwykle nie ma znaczenia dla realizacji projektu",
      "musi być stworzona od nowa dla każdego realizowanego projektu"
    ],
    "correct": 0,
    "explanation": "Rozpoczęcie realizacji projektu unijnego często wymaga wprowadzenia dodatkowych zasad dotyczących ewidencji księgowej, obiegu dokumentów oraz sposobu rozliczania kosztów. Z tego względu polityka rachunkowości beneficjenta powinna zostać dostosowana do nowych obowiązków. Aktualizacja dokumentacji pozwala zapewnić zgodność działań z wymogami instytucji finansujących."
  },
  {
    "question": "Sprawozdawczość finansowa w ramach polityki spójności w perspektywie finansowej 2021-2027 bazuje na:",
    "answers": [
      "wnioskach o dofinansowanie",
      "rachunku zysków i strat projektu",
      "wnioskach o płatność i sprawozdaniach z postępu rzeczowego",
      "wnioskach o płatność"
    ],
    "correct": 2,
    "explanation": "System monitorowania projektów w perspektywie 2021–2027 opiera się zarówno na danych finansowych, jak i rzeczowych. Same wydatki nie pozwalają ocenić skuteczności realizacji projektu. Dlatego beneficjent jest zobowiązany do wykazywania postępu rzeczowego, osiąganych wskaźników oraz poniesionych kosztów w ramach składanych dokumentów rozliczeniowych."
  },
  {
    "question": "Co do zasady wnioski o płatność składane są:",
    "answers": [
      "papierowo",
      "elektronicznie w formie mailowej",
      "elektronicznie w dedykowanym systemie informatycznym",
      "w sposób dogodny dla beneficjenta i przez niego wybrany"
    ],
    "correct": 2,
    "explanation": "W obecnej perspektywie finansowej komunikacja pomiędzy beneficjentami a instytucjami zarządzającymi została w znacznym stopniu zdigitalizowana. Wnioski o płatność składane są za pośrednictwem dedykowanych systemów teleinformatycznych, które umożliwiają sprawną obsługę dokumentacji, monitorowanie postępu projektu oraz prowadzenie elektronicznej ścieżki audytu."
  },
  {
    "question": "Wniosek o płatność:",
    "answers": [
      "zawiera informacje o postępie rzeczowym i wskaźnikach monitorujących realizację projektu",
      "zawiera informacje o postępie finansowym i rzeczowym, ale nie o wskaźnikach monitorujących realizację projektu",
      "zawiera informacje o postępie finansowym, ale nie o postępie rzeczowym",
      "zawiera zestawienie płatności z tytułu transz dofinansowania przelanych na rachunek projektu"
    ],
    "correct": 0,
    "explanation": "Wniosek o płatność pełni nie tylko funkcję finansową, ale również sprawozdawczą. Beneficjent przedstawia w nim informacje dotyczące wykonanych działań, osiągniętych rezultatów oraz stopnia realizacji wskaźników określonych we wniosku o dofinansowanie. Dzięki temu instytucja finansująca może ocenić zarówno prawidłowość wydatkowania środków, jak i rzeczywiste postępy projektu."
  },
  {
    "question": "Beneficjenci projektów unijnych w ramach polityki spójności w perspektywie finansowej 2021-2027 mają obowiązek gromadzenia danych w dedykowanym systemie informatycznym m.in. na temat:",
    "answers": [
      "osób zaangażowanych w ramach personelu projektu",
      "ewidencji czasu pracy osób zaangażowanych w ramach personelu projektu",
      "ocen działań realizowanych w projekcie wyrażonych przez uczestników",
      "skarg i wniosków zgłoszonych w ramach realizacji projektu"
    ],
    "correct": 0,
    "explanation": "Beneficjenci realizujący projekty współfinansowane ze środków unijnych mają obowiązek gromadzenia danych dotyczących personelu projektu. Dane te są niezbędne do monitorowania zaangażowania kadry, kontroli kwalifikowalności kosztów osobowych oraz prawidłowego raportowania realizacji projektu. Dzięki temu instytucje zarządzające mogą weryfikować sposób wykorzystania środków publicznych."
  },
  {
    "question": "Trwałość projektu w ramach polityki spójności w perspektywie finansowej 2021-2027 wynika z:",
    "answers": [
      "indywidualnych ustaleń w ramach projektu dokonanych między beneficjentem a instytucją przyznającą dofinansowanie",
      "decyzji instytucji przyznającej dofinansowanie, która określa dla jakich projektów trwałość musi być zachowana, a dla jakich nie",
      "ustawy z dnia 28 kwietnia 2022 r. o zasadach realizacji zadań finansowanych ze środków europejskich w perspektywie finansowej 2021–2027",
      "rozporządzenia Parlamentu Europejskiego i Rady (UE) 2021/1060 z 24 czerwca 2021 r. (rozporządzenia ogólnego)"
    ],
    "correct": 3,
    "explanation": "Obowiązek zachowania trwałości projektu wynika bezpośrednio z przepisów prawa Unii Europejskiej, w szczególności z rozporządzenia ogólnego UE 2021/1060. Dokument ten określa warunki, które muszą zostać spełnione po zakończeniu realizacji projektu, aby uniknąć konieczności zwrotu dofinansowania. Trwałość ma zapewnić długoterminowe utrzymanie efektów projektu."
  },
  {
    "question": "Zwykle okres trwałości projektu unijnego:",
    "answers": [
      "jest ustalany indywidualnie dla każdego projektu i zależy od jego zasięgu, wartości i specyfiki",
      "to 3 lata od daty zakończenia realizacji projektu",
      "to 3 lub 5 lat od daty zakończenia realizacji projektu",
      "to 3 lub 5 lat od daty płatności końcowej"
    ],
    "correct": 2,
    "explanation": "W większości projektów współfinansowanych ze środków europejskich okres trwałości wynosi 3 lub 5 lat od zakończenia projektu. Długość tego okresu zależy od rodzaju beneficjenta oraz charakteru inwestycji. Celem tego wymogu jest zapewnienie, że rezultaty projektu będą wykorzystywane zgodnie z przeznaczeniem przez odpowiednio długi czas."
  },
  {
    "question": "Na podstawie ustawy z dnia 28 kwietnia 2022 r. o zasadach realizacji zadań finansowanych ze środków europejskich w perspektywie finansowej 2021-2027 beneficjent jest obowiązany udostępnić instytucji kontrolującej:",
    "answers": [
      "tylko dokumenty związane bezpośrednio z realizacją projektu",
      "również dokumenty niezwiązane bezpośrednio z realizacją projektu, jeżeli jest to konieczne do stwierdzenia kwalifikowalności wydatków ponoszonych w ramach realizacji projektu",
      "również dokumenty niezwiązane bezpośrednio z realizacją projektu, jeżeli pomoże to poszerzyć wiedzę pracowników instytucji kontrolującej o branży, w której działa beneficjent",
      "wszystkie posiadane przez beneficjenta dokumenty związane i niezwiązane z projektem"
    ],
    "correct": 1,
    "explanation": "Instytucja kontrolująca może żądać również dokumentów niezwiązanych bezpośrednio z projektem, jeżeli są one niezbędne do oceny kwalifikowalności wydatków lub prawidłowości realizacji projektu. Pozwala to na pełną ocenę okoliczności mających wpływ na wykorzystanie środków publicznych. Zakres kontroli musi jednak pozostawać związany z celem prowadzonego postępowania."
  },
  {
    "question": "Wzór umowy o dofinansowanie projektu unijnego jest określony:",
    "answers": [
      "w rozporządzeniu wydanym na podstawie ustawy z dnia 28 kwietnia 2022 r. o zasadach realizacji zadań finansowanych ze środków europejskich w perspektywie finansowej 2021-2027",
      "w załączniku do wytycznych dotyczących kwalifikowalności wydatków na lata 2021-2027",
      "każdorazowo przez Ministerstwo Funduszy i Polityki Regionalnej odpowiedzialne za koordynację realizacji projektów unijnych",
      "każdorazowo przez instytucję ogłaszającą nabór projektów"
    ],
    "correct": 3,
    "explanation": "Wzór umowy o dofinansowanie jest przygotowywany przez instytucję organizującą nabór i uwzględnia specyfikę danego programu, działania oraz rodzaju projektów. Dzięki temu możliwe jest dostosowanie zapisów umowy do wymogów konkretnego źródła finansowania. Nie istnieje jeden uniwersalny wzór stosowany we wszystkich programach."
  },
  {
    "question": "Zasada faktycznego poniesienia wydatku oznacza, że:",
    "answers": [
      "wszystkie wydatki w projektach unijnych mają być faktycznie poniesione w znaczeniu kasowym",
      "wydatki w projektach unijnych mają być faktycznie poniesione w znaczeniu kasowym z wyłączeniem ściśle określonych przypadków, np. zakupu środków trwałych",
      "wydatki w projektach unijnych mają być faktycznie poniesione w znaczeniu kasowym z wyłączeniem ściśle określonych przypadków, np. amortyzacji środków trwałych",
      "wydatki w projektach unijnych mają być faktycznie poniesione w znaczeniu kasowym, chyba że beneficjent zadecyduje co innego"
    ],
    "correct": 2,
    "explanation": "Zasada faktycznego poniesienia wydatku oznacza co do zasady rzeczywisty przepływ środków pieniężnych. Wyjątkiem są określone w wytycznych sytuacje, takie jak amortyzacja środków trwałych, gdzie koszt może zostać uznany mimo braku bieżącej płatności. Pozwala to uwzględnić rzeczywiste zużycie zasobów wykorzystywanych w projekcie."
  },
  {
    "question": "Zgodnie z wytycznymi dotyczącymi kwalifikowalności wydatków na lata 2021-2027 każdy wydatek w projekcie:",
    "answers": [
      "może być weryfikowany tylko i wyłącznie jednokrotnie – we wniosku o płatność",
      "może być weryfikowany tylko i wyłącznie jednokrotnie – we wniosku o dofinansowanie",
      "może być weryfikowany po zakończeniu realizacji projektu w zakresie obowiązków nałożonych na beneficjenta umową o dofinansowanie projektu oraz wynikających z przepisów prawa",
      "może być weryfikowany tylko i wyłącznie w okresie realizacji projektu - ocena kwalifikowalności poniesionych wydatków nie może być prowadzona po zakończeniu realizacji projektu"
    ],
    "correct": 2,
    "explanation": "Kwalifikowalność wydatków może być oceniana zarówno podczas realizacji projektu, jak i po jego zakończeniu. Beneficjent ma obowiązek przechowywania dokumentacji przez wymagany okres i udostępniania jej podczas kontroli lub audytów. Oznacza to, że wydatki mogą zostać ponownie zweryfikowane nawet kilka lat po ich rozliczeniu."
  },
  {
    "question": "W ramach metod uproszczonych, np. ryczałtowych kosztów pośrednich:",
    "answers": [
      "nie ma konieczności monitorowania dokumentów księgowych na potrzeby projektu",
      "jest obowiązek zachowania zasady faktycznego poniesienia wydatków",
      "nie ma konieczności realizacji i monitorowania jakichkolwiek działań",
      "nie ma konieczności monitorowania postępu realizacji projektu i osiągniętych wskaźników, produktów, rezultatów"
    ],
    "correct": 0,
    "explanation": "W przypadku stosowania metod uproszczonych beneficjent nie musi dokumentować każdego kosztu fakturami i innymi dokumentami księgowymi. Kluczowe znaczenie ma osiągnięcie rezultatów lub wykonanie działań stanowiących podstawę rozliczenia projektu. Kontrola skupia się więc na efektach, a nie na pojedynczych wydatkach."
  },
  {
    "question": "Okres archiwizacji dokumentacji projektowej w ramach polityki spójności w perspektywie finansowej 2021-2027 to co do zasady:",
    "answers": [
      "1 rok od dnia 31 grudnia roku, w którym instytucja nadzorująca projekt dokonała ostatniej płatności na rzecz beneficjenta",
      "5 lat od dnia 31 grudnia roku, w którym instytucja nadzorująca projekt dokonała ostatniej płatności na rzecz beneficjenta",
      "8 lat od dnia 31 grudnia roku, w którym instytucja nadzorująca projekt dokonała ostatniej płatności na rzecz beneficjenta",
      "8 lat od zakończenia realizacji projektu"
    ],
    "correct": 1,
    "explanation": "Dokumentacja projektowa musi być przechowywana przez okres określony w przepisach i umowie o dofinansowanie. Najczęściej wynosi on 5 lat od końca roku, w którym dokonano ostatniej płatności na rzecz beneficjenta. Obowiązek ten umożliwia przeprowadzenie kontroli i audytów po zakończeniu projektu."
  },
  {
    "question": "Zmiany w projektach unijnych w perspektywie finansowej 2021-2027:",
    "answers": [
      "nie mogą dotyczyć zakresu rzeczowego ani finansowego",
      "nie mogą dotyczyć harmonogramu realizacji projektu",
      "nie mogą być wprowadzone, jeśli wpłynęłyby na wynik oceny projektu w sposób, który skutkowałby negatywną oceną projektu",
      "mogą być wprowadzone tylko i wyłącznie poprzez aneksowanie umowy o dofinansowanie"
    ],
    "correct": 2,
    "explanation": "Zmiany w projekcie są dopuszczalne, jednak nie mogą prowadzić do sytuacji, w której projekt po zmianach nie spełniałby kryteriów, na podstawie których otrzymał dofinansowanie. W przeciwnym razie doszłoby do naruszenia zasad konkurencyjności i równego traktowania wszystkich wnioskodawców. Dlatego każda istotna zmiana wymaga odpowiedniej oceny i często zgody instytucji finansującej."
  },
  {
    "question": "Rozwiązanie umowy o dofinansowanie za porozumieniem stron w perspektywie finansowej 2021-2027:",
    "answers": [
      "zawsze oznacza konieczność zwrotu całości środków otrzymanych przez beneficjenta",
      "zawsze oznacza możliwość rozliczenia środków poniesionych przed rozwiązaniem umowy",
      "oznacza konieczność negocjacji skutków finansowych rozwiązania umowy",
      "wiąże się ze skutkami finansowymi określonymi w umowie o dofinansowanie na wypadek rozwiązania tej umowy za porozumieniem stron"
    ],
    "correct": 3,
    "explanation": "Rozwiązanie umowy o dofinansowanie za porozumieniem stron nie oznacza automatycznie ani obowiązku zwrotu całego dofinansowania, ani możliwości zachowania wszystkich otrzymanych środków. Skutki takiego rozwiązania zależą od postanowień umowy, stopnia realizacji projektu oraz oceny instytucji finansującej. Każdy przypadek wymaga indywidualnej analizy."
  },
  {
    "question": "Która z wymienionych poniżej przesłanek nie występuje w art. 107 ust. 1 TFUE:",
    "answers": [
      "odbiorcą wsparcia jest przedsiębiorstwo,",
      "wsparcia przyznawane jest z zasobów publicznych,",
      "wsparcie ma charakter selektywny,",
      "dochodzi do istotnego zakłócenia konkurencji."
    ],
    "correct": 3,
    "explanation": "Art. 107 ust. 1 TFUE określa przesłanki uznania wsparcia za pomoc publiczną. Wsparcie musi pochodzić ze środków publicznych, przyznawać korzyść przedsiębiorstwu, mieć charakter selektywny oraz wpływać lub potencjalnie wpływać na konkurencję i handel między państwami członkowskimi. Spełnienie tych warunków powoduje konieczność stosowania przepisów dotyczących pomocy publicznej."
  },
  {
    "question": "Jaki charakter mają przesłanki z art. 107 ust. 1 TFUE?",
    "answers": [
      "kumulatywny,",
      "alternatywny,",
      "rozłączny,",
      "sekwencyjny."
    ],
    "correct": 0,
    "explanation": "Przesłanki określone w art. 107 ust. 1 TFUE mają charakter kumulatywny. Oznacza to, że wszystkie muszą zostać spełnione jednocześnie, aby dane wsparcie zostało uznane za pomoc publiczną. Brak choćby jednej z nich powoduje, że wsparcie nie podlega reżimowi pomocy publicznej."
  },
  {
    "question": "Czy jednostkę samorządu terytorialnego można uznać za przedsiębiorstwo:",
    "answers": [
      "tak, o ile prowadzi działalność gospodarczą w rozumieniu prawa unijnego",
      "tak, zawsze będzie traktowana jako przedsiębiorstwo w rozumieniu art. 107 ust. 1 TFUE",
      "nie",
      "to zależy od rozwiązań prawa krajowego."
    ],
    "correct": 0,
    "explanation": "Jednostka samorządu terytorialnego może zostać uznana za przedsiębiorstwo, jeżeli prowadzi działalność gospodarczą polegającą na oferowaniu towarów lub usług na rynku. Status przedsiębiorstwa zależy od charakteru wykonywanej działalności, a nie od formy prawnej podmiotu. Dlatego nawet podmiot publiczny może być traktowany jako przedsiębiorstwo w rozumieniu prawa unijnego."
  },
  {
    "question": "Który z poniżej wymienionych aktów prawnych wyłączył obowiązek notyfikacji:",
    "answers": [
      "Rozporządzenie Komisji nr 651/2014 (tzw. GBER)",
      "Rozporządzenie 2023/2831 (pomoc de minimis),",
      "Ramy środków pomocy państwa na rzecz wsparcia Paktu dla czystego przemysłu (ramy pomocy państwa na potrzeby Paktu dla czystego przemysłu),",
      "Tymczasowe ramy środków pomocy państwa w celu wsparcia gospodarki w kontekście trwającej epidemii COVID-19"
    ],
    "correct": 0,
    "explanation": "Rozporządzenie Komisji (UE) nr 651/2014, czyli GBER, umożliwia udzielanie określonych rodzajów pomocy publicznej bez konieczności ich wcześniejszej notyfikacji Komisji Europejskiej. Rozwiązanie to znacząco upraszcza procedury oraz przyspiesza proces udzielania wsparcia. Warunkiem jest jednak spełnienie wszystkich wymagań określonych w rozporządzeniu."
  },
  {
    "question": "Za MŚP w rozumieniu załącznika I do rozporządzenia 651/2014 może zostać uznany podmiot, który spełnia:",
    "answers": [
      "kryterium niezależności i kryterium dotyczące liczby zatrudnionych osób,",
      "kryterium niezależności i kryterium dotyczące rocznego obrotu lub całkowitego bilansu rocznego,",
      "kryterium niezależności, kryterium rynku produktowego oraz kryterium dotyczące liczby zatrudnionych osób,",
      "kryterium dotyczące liczby zatrudnionych osób, kryterium finansowe dotyczące rocznego obrotu lub całkowitego bilansu rocznego, kryterium niezależności."
    ],
    "correct": 3,
    "explanation": "Aby przedsiębiorstwo zostało uznane za mikro, małe lub średnie, musi spełniać kryteria dotyczące zatrudnienia, obrotu lub sumy bilansowej oraz niezależności przedsiębiorstwa. Ocena statusu MŚP wymaga uwzględnienia wszystkich tych elementów łącznie. Dzięki temu możliwe jest prawidłowe określenie uprawnień do korzystania z określonych form wsparcia."
  },
  {
    "question": "Okres kwalifikowalności wydatków w perspektywie finansowej 2021–2027 to:",
    "answers": [
      "1.01.2021–31.12.2027",
      "1.01.2021–31.12.2029",
      "1.07.2021–30.06.2029",
      ""
    ],
    "correct": 1,
    "explanation": "Okres kwalifikowalności wydatków w perspektywie finansowej 2021–2027 został wydłużony zgodnie z zasadami rozliczania funduszy unijnych i obejmuje również dodatkowy czas na zamknięcie programów. Dzięki temu beneficjenci oraz instytucje zarządzające mają możliwość pełnego rozliczenia środków oraz zakończenia wszystkich procedur związanych z realizacją projektów."
  },
  {
    "question": "W projektach rozliczanych metodami uproszczonymi (SCO):",
    "answers": [
      "Weryfikacja odbywa się wyłącznie na podstawie faktur",
      "Zawsze trzeba gromadzić pełną dokumentację księgową wydatków",
      "Nie ma obowiązku gromadzenia/opisywania dokumentów księgowych, ale trzeba dokumentować produkty/rezultaty",
      ""
    ],
    "correct": 2,
    "explanation": "Przy metodach uproszczonych podstawą rozliczenia projektu nie są pojedyncze dokumenty księgowe, lecz osiągnięte rezultaty, wykonane działania lub spełnione warunki określone dla danej metody. Dzięki temu ogranicza się obciążenia administracyjne beneficjentów, przy jednoczesnym zachowaniu kontroli nad realizacją celów projektu."
  },
  {
    "question": "Który wydatek może być kwalifikowalny?",
    "answers": [
      "Opłaty notarialne niezbędne do realizacji projektu",
      "Kary i grzywny",
      "Prowizje za wymianę walut",
      ""
    ],
    "correct": 0,
    "explanation": "Nie wszystkie wydatki ponoszone przez beneficjenta mogą zostać uznane za kwalifikowalne. Opłaty notarialne związane bezpośrednio z realizacją projektu mogą stanowić koszt kwalifikowany, natomiast kary, grzywny oraz sankcje finansowe są co do zasady wyłączone z finansowania ze środków unijnych. Wynika to z zasady racjonalnego i zgodnego z prawem wydatkowania środków publicznych."
  },
  {
    "question": "Jaka jest podstawowa różnica w jurysdykcji między sądem powszechnym a arbitrażem?",
    "answers": [
      "Sąd powszechny wymaga zgody obu stron, natomiast arbitraż wynika bezpośrednio z Kodeksu postępowania cywilnego.",
      "Jurysdykcja sądu powszechnego jest przymusowa i wynika z ustawy, podczas gdy arbitraż jest dobrowolny i wymaga umowy stron (klauzuli).",
      "Obie metody mają charakter przymusowy w obrocie profesjonalnym (B2B).",
      "Sąd powszechny opiera się na umowie stron, a arbitraż na jednostronnym oświadczeniu woli."
    ],
    "correct": 1,
    "explanation": "Podstawowa różnica pomiędzy arbitrażem a sądownictwem powszechnym polega na źródle właściwości organu rozstrzygającego spór. W przypadku arbitrażu strony dobrowolnie zgadzają się na poddanie sporu pod rozstrzygnięcie arbitra lub sądu arbitrażowego. Natomiast właściwość sądów powszechnych wynika bezpośrednio z przepisów prawa."
  },
  {
    "question": "Na czym polega różnica w uprawnieniach osoby trzeciej w mediacji i koncyliacji?",
    "answers": [
      "Mediator rozstrzyga spór władczo, a koncyliator jedynie moderuje dyskusję.",
      "Koncyliator jest neutralny i nieoceniający, podczas gdy mediator narzuca rozwiązanie.",
      "Mediator z reguły nie proponuje własnych rozwiązań, natomiast koncyliator może aktywnie przedstawiać konkretne propozycje i rekomendacje.",
      "Między rolą mediatora i koncyliatora nie występują żadne różnice proceduralne."
    ],
    "correct": 2,
    "explanation": "Mediator przede wszystkim wspiera strony w wypracowaniu własnego porozumienia i zachowuje neutralność wobec proponowanych rozwiązań. Koncyliator może natomiast aktywniej uczestniczyć w procesie rozwiązywania sporu, przedstawiając konkretne propozycje ugody lub rekomendacje. To właśnie możliwość formułowania własnych propozycji stanowi najważniejszą różnicę pomiędzy tymi instytucjami."
  },
  {
    "question": "Wpis od odwołania w postępowaniu o udzielenie zamówienia publicznego powinien zostać uiszczony:",
    "answers": [
      "W ciągu 3 dni od wniesienia odwołania",
      "Najpóźniej przed wyznaczeniem rozprawy",
      "W terminie wyznaczonym przez Prezesa Izby",
      "Najpóźniej do dnia upływu terminu do wniesienia odwołania"
    ],
    "correct": 3,
    "explanation": "Wpis od odwołania jest warunkiem skutecznego wniesienia środka ochrony prawnej. Musi zostać uiszczony najpóźniej z upływem terminu przewidzianego na wniesienie odwołania. Niedochowanie tego wymogu skutkuje odrzuceniem odwołania bez merytorycznego rozpoznania."
  },
  {
    "question": "Do kogo wnosi się odwołanie w postępowaniu o udzielenie zamówienia publicznego?",
    "answers": [
      "Do zamawiającego",
      "Do Prezesa Urzędu Zamówień Publicznych",
      "Do Prezesa Krajowej Izby Odwoławczej",
      "Do Sądu Okręgowego w Warszawie"
    ],
    "correct": 2,
    "explanation": "Odwołanie w postępowaniu o udzielenie zamówienia publicznego wnosi się do Prezesa Krajowej Izby Odwoławczej. KIO jest wyspecjalizowanym organem właściwym do rozpoznawania sporów związanych z zamówieniami publicznymi. Zamawiający otrzymuje kopię odwołania, ale nie jest organem właściwym do jego rozpoznania."
  },
  {
    "question": "W czasie zdalnej rozprawy lub zdalnego posiedzenia pisma co do zasady wnosi się:",
    "answers": [
      "Wyłącznie w formie pisemnej",
      "Do protokołu ustnie",
      "Za pośrednictwem operatora pocztowego",
      "W postaci elektronicznej"
    ],
    "correct": 3,
    "explanation": "Podczas zdalnych rozpraw i posiedzeń zasadą jest elektroniczny obieg dokumentów. Pisma procesowe składa się w postaci elektronicznej, co umożliwia sprawne prowadzenie postępowania bez konieczności fizycznej obecności uczestników. Rozwiązanie to przyspiesza komunikację i ogranicza formalności związane z przesyłaniem dokumentów."
  },
  {
    "question": "Zamawiający, po otrzymaniu odwołania, ma obowiązek:",
    "answers": [
      "Wnieść odpowiedź wyłącznie wtedy, gdy uznaje odwołanie za bezzasadne",
      "Przekazać odwołanie do Prezesa UZP",
      "Odpowiedzieć wyłącznie na wezwanie odwołującego",
      "Wnieść odpowiedź na odwołanie w terminie wyznaczonym przez Prezesa Izby"
    ],
    "correct": 3,
    "explanation": "Po otrzymaniu odwołania zamawiający ma obowiązek przedstawić swoje stanowisko poprzez wniesienie odpowiedzi na odwołanie. Odpowiedź ta składana jest w terminie określonym przez Prezesa Krajowej Izby Odwoławczej. Obowiązek ten służy zapewnieniu rzetelnego rozpoznania sprawy i umożliwia przedstawienie argumentów obu stron."
  },
  {
    "question": "Dłużnik jest zobowiązany do spełnienia świadczenia umownego:",
    "answers": [
      "tylko osobiście",
      "przez osobę trzecią tylko gdy umowa przewiduje taką możliwość",
      "tylko osobiście, gdy umowa wyłącza spełnienie świadczenia przez osobę trzecią.",
      ""
    ],
    "correct": 2,
    "explanation": "Co do zasady dłużnik może spełnić świadczenie za pośrednictwem osoby trzeciej. Wyjątkiem są sytuacje, w których z treści zobowiązania, ustawy lub właściwości świadczenia wynika konieczność osobistego działania dłużnika. Dlatego osobiste wykonanie świadczenia jest wymagane jedynie wtedy, gdy możliwość zastępstwa została wyłączona."
  },
  {
    "question": "Gdzie powinno nastąpić spełnienie świadczenia pieniężnego według art. 454 KC?",
    "answers": [
      "W miejscu zamieszkania dłużnika  z chwili powstania zobowiązania",
      "W miejscu zamieszkania lub siedzibie wierzyciela w chwili spełnienia świadczenia",
      "W miejscu podpisania umowy",
      ""
    ],
    "correct": 1,
    "explanation": "Zgodnie z art. 454 Kodeksu cywilnego świadczenie pieniężne powinno zostać spełnione w miejscu zamieszkania lub siedzibie wierzyciela w chwili wykonania zobowiązania. Oznacza to, że wierzyciel nie musi udawać się do dłużnika w celu odbioru należności. Jest to wyjątek od ogólnej zasady dotyczącej miejsca spełnienia świadczeń."
  },
  {
    "question": "Co oznacza termin płatności w zobowiązaniu?",
    "answers": [
      "Termin, do którego najpóźniej dłużnik powinien spełnić świadczenie",
      "Termin, w którym wierzyciel musi odebrać świadczenie",
      "Termin, od którego nalicza się odsetki",
      "Termin, w którym osoba trzecia może spełnić świadczenie"
    ],
    "correct": 0,
    "explanation": "Termin płatności określa najpóźniejszy moment, w którym dłużnik powinien wykonać swoje zobowiązanie pieniężne. Po jego upływie wierzyciel może dochodzić swoich roszczeń oraz naliczać odsetki za opóźnienie. Termin ten wyznacza granicę prawidłowego wykonania zobowiązania."
  },
  {
    "question": "Jakie są przesłanki odpowiedzialności kontraktowej według art. 471 KC?",
    "answers": [
      "Tylko powstanie szkody i wina dłużnika",
      "Istnienie ważnego zobowiązania, naruszenie zobowiązania, powstanie szkody, związek przyczynowy",
      "Tylko naruszenie zobowiązania i wina dłużnika",
      "Tylko związek przyczynowy między naruszeniem zobowiązania a winą dłużnika"
    ],
    "correct": 1,
    "explanation": "Odpowiedzialność kontraktowa wymaga łącznego wystąpienia kilku elementów: istnienia zobowiązania, jego niewykonania lub nienależytego wykonania, powstania szkody oraz związku przyczynowego między naruszeniem a szkodą. Dopiero spełnienie wszystkich tych przesłanek pozwala przypisać dłużnikowi odpowiedzialność odszkodowawczą."
  },
  {
    "question": "Co oznacza domniemanie winy dłużnika w odpowiedzialności kontraktowej (art. 471 KC)?",
    "answers": [
      "Wierzyciel jest zwolniony z obowiązku wykazania naruszenia zobowiązania, jeżeli powstała szkoda.",
      "Dłużnik ponosi odpowiedzialność niezależnie od możliwości przypisania mu winy.",
      "Po wykazaniu przez wierzyciela niewykonania lub nienależytego wykonania zobowiązania to na dłużniku spoczywa ciężar dowodu, że naruszenie nastąpiło z przyczyn, za które nie ponosi odpowiedzialności.",
      "Sąd przyjmuje winę dłużnika wyłącznie w przypadku zobowiązań rezultatu."
    ],
    "correct": 2,
    "explanation": "Domniemanie winy dłużnika oznacza, że po wykazaniu przez wierzyciela niewykonania lub nienależytego wykonania zobowiązania nie musi on dodatkowo udowadniać winy dłużnika. Ciężar dowodu przechodzi na dłużnika, który musi wykazać, że naruszenie nastąpiło z przyczyn od niego niezależnych. Rozwiązanie to wzmacnia ochronę wierzyciela i ułatwia dochodzenie roszczeń."
  },
  {
    "question": "Co może zrobić wierzyciel w razie zwłoki dłużnika przy zobowiązaniach prostych?",
    "answers": [
      "Tylko odstąpić od umowy",
      "Żądać wykonania świadczenia w naturze i odszkodowania za zwłokę",
      "Tylko żądać odszkodowania",
      "Tylko wyznaczyć nowy termin"
    ],
    "correct": 1,
    "explanation": "W odpowiedzialności kontraktowej zasadą jest obowiązek naprawienia szkody wynikającej z niewykonania lub nienależytego wykonania zobowiązania. Odszkodowanie ma przywrócić wierzyciela do sytuacji, w jakiej znajdowałby się, gdyby zobowiązanie zostało wykonane prawidłowo. Zakres odpowiedzialności określają przepisy Kodeksu cywilnego oraz treść zawartej umowy."
  },
  {
    "question": "Jeżeli termin spełnienia świadczenia nie został oznaczony, zobowiązanie:",
    "answers": [
      "jest nieważne",
      "staje się zobowiązaniem naturalnym",
      "powinno być spełnione niezwłocznie po wezwaniu dłużnika",
      "staje się wymagalne z chwilą zawarcia umowy"
    ],
    "correct": 2,
    "explanation": "Kara umowna stanowi z góry określoną sankcję za niewykonanie lub nienależyte wykonanie zobowiązania niepieniężnego. Jej celem jest uproszczenie dochodzenia roszczeń przez wierzyciela, który nie musi wykazywać wysokości poniesionej szkody. Sam fakt naruszenia zobowiązania może być wystarczający do żądania zapłaty kary."
  },
  {
    "question": "Wymagalność wierzytelności oznacza:",
    "answers": [
      "powstanie zobowiązania",
      "możliwość dochodzenia roszczenia na drodze przymusu państwowego",
      "popadnięcie dłużnika w zwłokę",
      "rozpoczęcie biegu terminu wykonania zobowiązania"
    ],
    "correct": 1,
    "explanation": "Odstąpienie od umowy powoduje co do zasady, że umowę traktuje się tak, jakby nigdy nie została zawarta. Strony są zobowiązane do zwrotu wzajemnie otrzymanych świadczeń, chyba że przepisy szczególne stanowią inaczej. Instytucja ta pozwala zakończyć stosunek umowny w przypadku istotnego naruszenia zobowiązania."
  },
  {
    "question": "Zwłoka dłużnika zachodzi, gdy:",
    "answers": [
      "świadczenie nie zostało spełnione w terminie",
      "opóźnienie jest następstwem okoliczności, za które dłużnik odpowiada",
      "wierzyciel nie odebrał świadczenia",
      "termin spełnienia świadczenia nie został oznaczony"
    ],
    "correct": 1,
    "explanation": "Przedawnienie nie powoduje wygaśnięcia roszczenia, lecz daje dłużnikowi możliwość uchylenia się od jego zaspokojenia poprzez podniesienie zarzutu przedawnienia. Roszczenie nadal istnieje, ale jego skuteczne dochodzenie przed sądem staje się utrudnione. Celem tej instytucji jest zapewnienie pewności obrotu prawnego."
  },
  {
    "question": "Które z poniższych twierdzeń dotyczących klauzuli poufności jest prawidłowe?",
    "answers": [
      "Klauzula poufności może obejmować informacje powszechnie znane",
      "Obowiązek zachowania poufności dotyczy wyłącznie jednej strony umowy",
      "Zakres informacji objętych poufnością powinien być zdefiniowany",
      "Obowiązek poufności zawsze wygasa wraz z zakończeniem negocjacji"
    ],
    "correct": 2,
    "explanation": "Termin przedawnienia zależy od rodzaju roszczenia i jest określony w przepisach prawa. Ustawodawca przewiduje różne okresy przedawnienia dla różnych kategorii zobowiązań. Dzięki temu uwzględniana jest specyfika poszczególnych stosunków prawnych oraz potrzeba ochrony interesów stron."
  },
  {
    "question": "Waloryzacja sądowa świadczenia pieniężnego (art. 358[1] §3 KC) jest możliwa, gdy:",
    "answers": [
      "Strona prowadząca przedsiębiorstwo żąda waloryzacji świadczenia związanego z działalnością gospodarczą",
      "Nastąpiła istotna zmiana siły nabywczej pieniądza po powstaniu zobowiązania, ale przed jego wykonaniem",
      "Wartość świadczenia została określona w walucie obcej",
      "Strony wyraźnie wyłączyły możliwość waloryzacji w umowie"
    ],
    "correct": 1,
    "explanation": "Przerwanie biegu przedawnienia powoduje, że dotychczasowy okres przestaje być uwzględniany, a po ustaniu przyczyny przerwania termin biegnie od początku. Rozwiązanie to chroni wierzyciela podejmującego działania zmierzające do dochodzenia swoich praw. Najczęściej dochodzi do tego poprzez wniesienie pozwu lub uznanie roszczenia przez dłużnika."
  },
  {
    "question": "Solidarność bierna w zobowiązaniach oznacza, że:",
    "answers": [
      "Każdy dłużnik odpowiada tylko za swoją część długu",
      "Wierzyciel może żądać całości świadczenia od dowolnego dłużnika, a spełnienie świadczenia przez jednego zwalnia pozostałych",
      "Dłużnicy mogą żądać od wierzyciela podziału świadczenia",
      "Solidarność bierna występuje tylko w zobowiązaniach niepodzielnych"
    ],
    "correct": 1,
    "explanation": "Uznanie długu przez dłużnika świadczy o potwierdzeniu istnienia zobowiązania i wywołuje określone skutki prawne, w tym może prowadzić do przerwania biegu przedawnienia. Dzięki temu wierzyciel zyskuje dodatkowy czas na dochodzenie swoich roszczeń. Uznanie może mieć charakter wyraźny lub dorozumiany."
  },
  {
    "question": "Zgodnie z art. 483 KC, kara umowna może być zastrzeżona:",
    "answers": [
      "wyłącznie na wypadek niewykonania lub nienależytego wykonania zobowiązania pieniężnego",
      "na wypadek niewykonania lub nienależytego wykonania zobowiązania niepieniężnego",
      "na wypadek naruszenia zobowiązania dowolnego rodzaju",
      "wyłącznie na wypadek odstąpienia od umowy przez wierzyciela"
    ],
    "correct": 1,
    "explanation": "Wierzyciel ma obowiązek współdziałania przy wykonaniu zobowiązania, jeżeli wymaga tego jego charakter lub treść stosunku prawnego. Brak takiego współdziałania może utrudnić lub uniemożliwić prawidłowe wykonanie świadczenia przez dłużnika. Prawo zobowiązań opiera się na zasadzie lojalnej współpracy stron."
  },
  {
    "question": "Czy wystąpienie szkody jest konieczne do dochodzenia roszczenia o zapłatę kary umownej?",
    "answers": [
      "Tak, zawsze",
      "Nie, wystąpienie szkody nie jest konieczne",
      "Tak, tylko w przypadku kary umownej zaliczalnej",
      "Tak, jeśli strony tak postanowią w umowie"
    ],
    "correct": 1,
    "explanation": "Zobowiązania należy wykonywać zgodnie z ich treścią, celem społeczno-gospodarczym, zasadami współżycia społecznego oraz ustalonymi zwyczajami. Sama literalna treść umowy nie zawsze wystarcza do oceny prawidłowości wykonania zobowiązania. Znaczenie mają również ogólne zasady prawa cywilnego."
  },
  {
    "question": "Zasada swobody umów w polskim prawie cywilnym podlega ograniczeniom wynikającym z:",
    "answers": [
      "wyłącznie ustaw",
      "zasad współżycia społecznego, ustaw oraz natury stosunku prawnego",
      "wyłącznie woli stron",
      "wyłącznie formy czynności prawnej"
    ],
    "correct": 1,
    "explanation": "Swoboda umów jest jedną z podstawowych zasad prawa cywilnego, jednak nie ma charakteru absolutnego. Treść i cel umowy nie mogą być sprzeczne z ustawą, zasadami współżycia społecznego ani naturą stosunku prawnego. Ograniczenia te służą ochronie bezpieczeństwa obrotu oraz interesów uczestników stosunków prawnych."
  },
  {
    "question": "Oferta w rozumieniu art. 66 KC musi:",
    "answers": [
      "być złożona wyłącznie na piśmie",
      "zawierać istotne postanowienia umowy i być skierowana do adresata",
      "być skierowana do ogółu",
      "zawierać wyłącznie cenę"
    ],
    "correct": 1,
    "explanation": "Oferta w rozumieniu art. 66 Kodeksu cywilnego musi zawierać istotne postanowienia przyszłej umowy oraz być skierowana do określonego adresata. Dopiero wtedy możliwe jest jej przyjęcie i zawarcie umowy bez potrzeby dalszych negocjacji. Sama informacja o cenie lub ogłoszenie skierowane do nieokreślonego kręgu odbiorców co do zasady nie stanowi oferty w rozumieniu przepisów."
  },
  {
    "question": "Oferent jest związany ofertą:",
    "answers": [
      "od chwili jej przyjęcia przez oblata",
      "od chwili złożenia oferty, chyba że w ofercie wskazano termin początkowy",
      "wyłącznie po potwierdzeniu przez oblata",
      "od chwili ogłoszenia oferty"
    ],
    "correct": 1,
    "explanation": "Oferent jest związany ofertą już od chwili jej skutecznego złożenia adresatowi, chyba że w samej ofercie wskazał późniejszy termin rozpoczęcia związania. Celem tej regulacji jest ochrona adresata oferty przed jej dowolnym wycofaniem przez oferenta. Dzięki temu adresat może podjąć świadomą decyzję o przyjęciu lub odrzuceniu oferty."
  },
  {
    "question": "Milczenie oblata co do przyjęcia oferty:",
    "answers": [
      "zawsze oznacza przyjęcie oferty",
      "co do zasady nie jest złożeniem oświadczenia woli, chyba że strony uzgodniły inaczej lub wynika to ze stałych stosunków gospodarczych",
      "zawsze oznacza odrzucenie oferty",
      "jest równoznaczne z zawarciem umowy"
    ],
    "correct": 1,
    "explanation": "Co do zasady milczenie nie jest traktowane jako oświadczenie woli i nie prowadzi do zawarcia umowy. Wyjątki mogą wynikać z wcześniejszych ustaleń stron, stałych relacji gospodarczych lub szczególnych przepisów prawa. Dlatego sam brak odpowiedzi na ofertę nie oznacza automatycznie jej przyjęcia."
  },
  {
    "question": "W obrocie profesjonalnym przyjęcie oferty z nieistotnymi modyfikacjami:",
    "answers": [
      "prowadzi do zawarcia umowy o treści zawierającej modyfikacje",
      "zawsze prowadzi do zamiany ról oferenta i oblata",
      "nie prowadzi do zawarcia umowy",
      "jest niedopuszczalne"
    ],
    "correct": 0,
    "explanation": "W obrocie profesjonalnym przyjęcie oferty z nieistotnymi zmianami co do zasady prowadzi do zawarcia umowy z uwzględnieniem tych modyfikacji. Rozwiązanie to ma ułatwiać i przyspieszać zawieranie umów pomiędzy przedsiębiorcami. Wyjątkiem są sytuacje, gdy oferent zastrzegł inaczej lub zmiany mają charakter istotny."
  },
  {
    "question": "Wadium w aukcji lub przetargu:",
    "answers": [
      "jest obowiązkowe",
      "może być zastrzeżone w warunkach aukcji lub przetargu i pełni funkcję eliminacji niepoważnych ofert oraz zryczałtowanego odszkodowania",
      "zawsze podlega zwrotowi",
      "nie może być ustanowione jako zabezpieczenie"
    ],
    "correct": 1,
    "explanation": "Wadium może zostać przewidziane w warunkach aukcji lub przetargu jako forma zabezpieczenia prawidłowego przebiegu postępowania. Jego celem jest eliminowanie niepoważnych ofert oraz zabezpieczenie organizatora przed skutkami uchylenia się wybranego uczestnika od zawarcia umowy. W określonych przypadkach wadium może zostać zatrzymane jako forma zryczałtowanego odszkodowania."
  },
  {
    "question": "Odpowiedzialność przedkontraktowa (culpa in contrahendo) polega na:",
    "answers": [
      "obowiązku naprawienia szkody tylko w razie zawarcia umowy",
      "obowiązku naprawienia szkody, jaką druga strona poniosła przez to, że liczyła na zawarcie umowy, jeśli negocjacje były prowadzone z naruszeniem dobrych obyczajów",
      "obowiązku naprawienia szkody wyłącznie w razie naruszenia poufności",
      "braku jakiejkolwiek odpowiedzialności"
    ],
    "correct": 1,
    "explanation": "Odpowiedzialność przedkontraktowa powstaje wtedy, gdy jedna ze stron prowadzi negocjacje w sposób sprzeczny z dobrymi obyczajami, naruszając zasady uczciwości i lojalności. Strona poszkodowana może domagać się naprawienia szkody wynikającej z uzasadnionego przekonania, że umowa zostanie zawarta. Ochronie podlega zaufanie uczestników negocjacji."
  },
  {
    "question": "Umowa przedwstępna (art. 389 KC) powinna:",
    "answers": [
      "określać wyłącznie termin zawarcia umowy przyrzeczonej",
      "określać istotne postanowienia umowy przyrzeczonej",
      "być zawarta wyłącznie w formie pisemnej",
      "określać wyłącznie strony umowy"
    ],
    "correct": 1,
    "explanation": "Umowa przedwstępna musi określać istotne postanowienia przyszłej umowy przyrzeczonej. Dzięki temu możliwe jest ustalenie, jaka umowa ma zostać zawarta w przyszłości oraz dochodzenie roszczeń wynikających z niewykonania umowy przedwstępnej. Samo wskazanie stron lub terminu nie jest wystarczające."
  },
  {
    "question": "Świadczenie w miejsce wykonania (datio in solutum) polega na:",
    "answers": [
      "spełnieniu przez dłużnika świadczenia pieniężnego",
      "spełnieniu przez dłużnika innego świadczenia niż pierwotnie ustalonego, za zgodą wierzyciela",
      "automatycznym wygaśnięciu zobowiązania po upływie terminu",
      "jednostronnym zwolnieniu dłużnika przez wierzyciela"
    ],
    "correct": 1,
    "explanation": "Świadczenie w miejsce wykonania polega na tym, że za zgodą wierzyciela dłużnik spełnia inne świadczenie niż pierwotnie przewidziane w zobowiązaniu. W rezultacie zobowiązanie wygasa, mimo że nie zostało wykonane dokładnie w pierwotnie ustalony sposób. Kluczowym elementem jest zgoda wierzyciela na zmianę przedmiotu świadczenia."
  },
  {
    "question": "Odnowienie (novatio) zobowiązania skutkuje:",
    "answers": [
      "wygaśnięciem zobowiązania z mocą wsteczną",
      "powstaniem nowego zobowiązania i wygaśnięciem dotychczasowego ex nunc (na przyszłość)",
      "wygaśnięciem zobowiązania wyłącznie w przypadku spełnienia świadczenia pieniężnego",
      "automatycznym przeniesieniem zabezpieczeń na nowe zobowiązanie"
    ],
    "correct": 1,
    "explanation": "Odnowienie zobowiązania prowadzi do powstania nowego zobowiązania i jednoczesnego wygaśnięcia dotychczasowego na przyszłość. Strony świadomie zastępują istniejący stosunek prawny nowym zobowiązaniem o zmienionej treści. Nie powoduje to jednak automatycznie zachowania wszystkich zabezpieczeń związanych z poprzednim zobowiązaniem."
  },
  {
    "question": "Potrącenie ustawowe jest możliwe, gdy:",
    "answers": [
      "istnieją dwie wierzytelności między tymi samymi osobami, są jednorodzajowe, wymagalne i zaskarżalne",
      "wierzytelności są nieulegające zajęciu",
      "jedna z wierzytelności wynika z czynu niedozwolonego",
      "potrącenie jest wyłączone przez przepisy szczególne"
    ],
    "correct": 0,
    "explanation": "Potrącenie ustawowe jest możliwe wtedy, gdy dwie osoby są jednocześnie względem siebie wierzycielami i dłużnikami, a ich wierzytelności są jednorodzajowe, wymagalne oraz mogą być dochodzone przed sądem. Spełnienie tych warunków pozwala na wzajemne umorzenie wierzytelności do wysokości wierzytelności niższej. Instytucja ta upraszcza rozliczenia pomiędzy stronami."
  },
  {
    "question": "Złożenie przedmiotu świadczenia do depozytu sądowego jest możliwe, gdy:",
    "answers": [
      "dłużnik nie zna miejsca zamieszkania wierzyciela",
      "wierzyciel nie ma pełnej zdolności do czynności prawnych ani przedstawiciela",
      "powstał spór, kto jest wierzycielem",
      "wszystkie powyższe"
    ],
    "correct": 3,
    "explanation": "Złożenie przedmiotu świadczenia do depozytu sądowego jest dopuszczalne w kilku sytuacjach przewidzianych przez przepisy prawa, między innymi gdy wierzyciel jest nieznany, nie można ustalić jego miejsca pobytu, nie posiada przedstawiciela lub istnieje spór co do tego, komu świadczenie powinno zostać spełnione. Wszystkie wymienione w pytaniu okoliczności stanowią ustawowe podstawy do skorzystania z depozytu sądowego. Instytucja ta chroni dłużnika przed negatywnymi skutkami niemożności wykonania zobowiązania."
  },
  {
    "question": "Skutkiem skutecznego złożenia przedmiotu świadczenia do depozytu sądowego jest:",
    "answers": [
      "wygaśnięcie zobowiązania z mocą wsteczną",
      "takie same skutki jak spełnienie świadczenia",
      "obowiązek zwrotu kosztów przez dłużnika",
      "automatyczne przeniesienie własności przedmiotu na wierzyciela"
    ],
    "correct": 1,
    "explanation": "Skuteczne złożenie przedmiotu świadczenia do depozytu sądowego wywołuje takie same skutki prawne jak prawidłowe spełnienie świadczenia bezpośrednio do rąk wierzyciela. Oznacza to, że dłużnik zostaje zwolniony z obowiązku wykonania zobowiązania. Rozwiązanie to ma na celu ochronę dłużnika w sytuacjach, gdy wykonanie świadczenia bezpośrednio na rzecz wierzyciela jest niemożliwe lub utrudnione."
  },
  {
    "question": "Zwolnienie z długu (art. 508 KC) wymaga:",
    "answers": [
      "wyłącznie oświadczenia wierzyciela",
      "umowy między wierzycielem a dłużnikiem, przy czym dłużnik musi zwolnienie przyjąć",
      "zgody sądu",
      "formy pisemnej"
    ],
    "correct": 1,
    "explanation": "Zwolnienie z długu jest umową pomiędzy wierzycielem a dłużnikiem. Samo oświadczenie wierzyciela nie wystarcza, ponieważ dłużnik musi wyrazić zgodę na zwolnienie. Dopiero zgodne oświadczenia obu stron prowadzą do wygaśnięcia zobowiązania na podstawie art. 508 Kodeksu cywilnego."
  },
  {
    "question": "Rozwiązanie umowy za porozumieniem stron:",
    "answers": [
      "jest jednostronne",
      "wymaga zgody obu stron i może nastąpić w każdym czasie",
      "zawsze wywołuje skutek z mocą wsteczną",
      "jest możliwe tylko w umowach bezterminowych"
    ],
    "correct": 1,
    "explanation": "Rozwiązanie umowy za porozumieniem stron wymaga zgodnych oświadczeń woli obu stron stosunku prawnego. Strony mogą zakończyć obowiązywanie umowy praktycznie w każdym czasie, niezależnie od tego, czy umowa została zawarta na czas określony czy nieokreślony. Jest to jeden z najbardziej elastycznych sposobów zakończenia stosunku umownego."
  },
  {
    "question": "Wypowiedzenie umowy:",
    "answers": [
      "jest jednostronne i wywołuje skutek na przyszłość",
      "jest jednostronne i wywołuje skutek z mocą wsteczną",
      "wymaga zgody obu stron",
      "jest możliwe tylko w umowach terminowych"
    ],
    "correct": 0,
    "explanation": "Wypowiedzenie umowy jest jednostronną czynnością prawną, która nie wymaga zgody drugiej strony. Jego skutki powstają na przyszłość, czyli od momentu upływu okresu wypowiedzenia lub wskazanego terminu. W przeciwieństwie do odstąpienia od umowy nie prowadzi ono co do zasady do skutków wstecznych."
  },
  {
    "question": "Umowne prawo odstąpienia (art. 395 KC) polega na:",
    "answers": [
      "możliwości jednostronnego rozwiązania umowy z mocą wsteczną przez uprawnioną stronę w oznaczonym terminie",
      "możliwości jednostronnego rozwiązania umowy na przyszłość przez uprawnioną stronę",
      "obowiązku zapłaty odstępnego przez obie strony",
      "automatycznym wygaśnięciu umowy po upływie terminu"
    ],
    "correct": 0,
    "explanation": "Umowne prawo odstąpienia pozwala jednej ze stron jednostronnie doprowadzić do rozwiązania umowy ze skutkiem wstecznym, pod warunkiem że zostało wcześniej zastrzeżone w umowie i wykonane w określonym terminie. Skutek wsteczny oznacza, że umowę traktuje się tak, jakby nie została zawarta. Strony są wówczas zobowiązane do zwrotu otrzymanych świadczeń."
  },
  {
    "question": "Oświadczenie woli w rozumieniu art. 60 KC to:",
    "answers": [
      "każde zachowanie człowieka",
      "przejaw ludzkiej woli zmierzający do wywołania skutków prawnych",
      "wyłącznie pisemne oświadczenie",
      "czynność konwencjonalna bez skutków prawnych"
    ],
    "correct": 1,
    "explanation": "Oświadczenie woli jest przejawem zachowania człowieka zmierzającym do wywołania określonych skutków prawnych. Nie każde zachowanie człowieka stanowi oświadczenie woli, lecz jedynie takie, które wyraża zamiar wywołania skutków przewidzianych przez prawo. Może ono zostać złożone w różnych formach, nie tylko pisemnej."
  },
  {
    "question": "Które z poniższych cech NIE jest wymagana dla ważnego oświadczenia woli?",
    "answers": [
      "zachowanie prawnie relewantne",
      "swobodne, wolne od przymusu",
      "złożone na serio",
      "złożone wyłącznie w obecności notariusza"
    ],
    "correct": 3,
    "explanation": "Dla ważności oświadczenia woli nie jest wymagane jego złożenie w obecności notariusza, chyba że szczególny przepis przewiduje taką formę dla konkretnej czynności prawnej. Istotne jest natomiast, aby oświadczenie było złożone świadomie, swobodnie i na serio. Obecność notariusza nie stanowi więc ogólnej przesłanki ważności oświadczeń woli."
  },
  {
    "question": "Chwila złożenia oświadczenia woli skierowanego do adresata według art. 61 KC to:",
    "answers": [
      "chwila wysłania oświadczenia",
      "chwila zapoznania się adresata z treścią oświadczenia",
      "chwila doręczenia oświadczenia adresatowi",
      "chwila zakończenia składania oświadczenia"
    ],
    "correct": 2,
    "explanation": "Zgodnie z art. 61 Kodeksu cywilnego oświadczenie woli skierowane do konkretnego adresata uważa się za złożone z chwilą, gdy dotarło do niego w taki sposób, że mógł zapoznać się z jego treścią. W praktyce najczęściej utożsamia się to z momentem doręczenia oświadczenia. Nie jest konieczne faktyczne przeczytanie dokumentu przez adresata."
  },
  {
    "question": "Oświadczenie woli można odwołać skutecznie, jeżeli:",
    "answers": [
      "odwołanie dotrze do adresata jednocześnie z oświadczeniem lub wcześniej",
      "odwołanie zostanie złożone po przyjęciu oświadczenia",
      "odwołanie zostanie złożone w formie aktu notarialnego",
      "odwołanie zostanie złożone w terminie 7 dni od złożenia oświadczenia"
    ],
    "correct": 0,
    "explanation": "Odwołanie oświadczenia woli jest skuteczne wyłącznie wtedy, gdy dotrze do adresata wcześniej albo jednocześnie z odwoływanym oświadczeniem. Jeżeli adresat otrzymał już skutecznie oświadczenie, jego jednostronne odwołanie co do zasady nie jest możliwe. Zasada ta zapewnia pewność i stabilność obrotu prawnego."
  },
  {
    "question": "Forma dokumentowa czynności prawnej polega na:",
    "answers": [
      "złożeniu oświadczenia woli w postaci dokumentu, w sposób umożliwiający ustalenie osoby składającej oświadczenie",
      "złożeniu oświadczenia woli wyłącznie w obecności notariusza",
      "złożeniu oświadczenia woli w formie elektronicznej",
      "złożeniu oświadczenia woli w formie pisemnej z datą pewną"
    ],
    "correct": 0,
    "explanation": "Forma dokumentowa polega na złożeniu oświadczenia woli w postaci dokumentu w sposób umożliwiający ustalenie osoby składającej oświadczenie. Nie wymaga ona własnoręcznego podpisu ani zachowania formy pisemnej. W praktyce może obejmować również wiadomości e-mail, SMS czy inne trwałe nośniki informacji pozwalające zidentyfikować autora oświadczenia."
  },
  {
    "question": "Skutki niezachowania formy czynności prawnej zależą od:",
    "answers": [
      "wyłącznie woli stron",
      "rodzaju formy zastrzeżonej (ad solemnitatem, ad eventum, ad probationem)",
      "wyłącznie przepisów szczególnych",
      "wyłącznie formy pisemnej"
    ],
    "correct": 1,
    "explanation": "Skutki niezachowania wymaganej formy czynności prawnej zależą od celu, dla którego dana forma została zastrzeżona przez ustawodawcę. Inne konsekwencje wywołuje forma zastrzeżona pod rygorem nieważności, inne dla celów dowodowych, a jeszcze inne dla wywołania określonych skutków prawnych. Dlatego zawsze należy analizować charakter konkretnego wymogu formalnego."
  },
  {
    "question": "Wady oświadczenia woli mogą skutkować:",
    "answers": [
      "wyłącznie bezwzględną nieważnością czynności prawnej",
      "bezwzględną nieważnością lub wzruszalnością czynności prawnej",
      "wyłącznie wzruszalnością czynności prawnej",
      "brakiem skutków prawnych"
    ],
    "correct": 1,
    "explanation": "Wady oświadczenia woli mogą prowadzić zarówno do bezwzględnej nieważności czynności prawnej, jak i do możliwości jej wzruszenia przez uprawnioną stronę. Skutek zależy od rodzaju wady, np. braku świadomości, błędu, groźby lub podstępu. Ustawodawca różnicuje konsekwencje prawne w zależności od stopnia naruszenia swobody podejmowania decyzji."
  },
  {
    "question": "Które z poniższych informacji nie stanowią danych osobowych w rozumieniu art. 4 pkt 1 RODO?",
    "answers": [
      "Numer PESEL członka zarządu beneficjenta będącego spółką z ograniczoną odpowiedzialnością.",
      "Imię i nazwisko uczestnika projektu współfinansowanego z Europejskiego Funduszu Społecznego Plus.",
      "Numer KRS fundacji będącej beneficjentem projektu.",
      "Służbowy adres e-mail zawierający imię i nazwisko osoby fizycznej prowadzącej jednoosobową działalność gospodarczą, wykonującej zlecenie w projekcie."
    ],
    "correct": 2,
    "explanation": "Numer KRS fundacji identyfikuje osobę prawną, a nie konkretną osobę fizyczną. Z tego względu nie stanowi danych osobowych w rozumieniu art. 4 pkt 1 RODO. W przeciwieństwie do numeru PESEL czy imienia i nazwiska nie pozwala na bezpośrednią identyfikację osoby fizycznej."
  },
  {
    "question": "Beneficjent zleca zewnętrznemu biuru rachunkowemu obsługę rozliczeń projektu (listy płac personelu, faktury od osób fizycznych). Biuro przetwarza te dane wyłącznie na udokumentowane polecenie beneficjenta, który samodzielnie ustalił cele i sposoby przetwarzania. Jak należy zakwalifikować biuro rachunkowe i na jakiej podstawie działa?",
    "answers": [
      "Jest podmiotem przetwarzającym (procesorem) i działa na podstawie umowy powierzenia z art. 28 RODO.",
      "Jest współadministratorem i powinno zawrzeć z beneficjentem porozumienie z art. 26 RODO.",
      "Jest odrębnym administratorem i działa na podstawie własnej polityki ochrony danych.",
      "Jest odbiorcą danych w rozumieniu art. 4 pkt 9 RODO i nie potrzebuje odrębnej podstawy ani umowy."
    ],
    "correct": 0,
    "explanation": "Biuro rachunkowe wykonujące czynności wyłącznie na polecenie beneficjenta i nieustalające samodzielnie celów ani sposobów przetwarzania danych jest podmiotem przetwarzającym. W takiej sytuacji przetwarzanie danych odbywa się na podstawie umowy powierzenia zawartej zgodnie z art. 28 RODO. Beneficjent pozostaje administratorem danych i odpowiada za zgodność przetwarzania z przepisami."
  },
  {
    "question": "Które z wymienionych danych przetwarzanych w projekcie nie należą do szczególnych kategorii danych (art. 9 RODO)?",
    "answers": [
      "Dane o stanie zdrowia uczestnika projektu, wynikające z orzeczenia o niepełnosprawności wykorzystywanego jako wskaźnik EFS+.",
      "Informacja o pochodzeniu etnicznym uczestnika projektu zbierana na potrzeby monitorowania wskaźnika EFS+.",
      "Informacja o przynależności uczestnika projektu do związku zawodowego.",
      "Informacja z Krajowego Rejestru Karnego o niekaralności osoby kierowanej w projekcie do pracy z małoletnimi."
    ],
    "correct": 3,
    "explanation": "Informacja o niekaralności nie należy do szczególnych kategorii danych wymienionych w art. 9 RODO. Szczególne kategorie obejmują między innymi dane dotyczące zdrowia, pochodzenia etnicznego czy przynależności związkowej. Dane o wyrokach skazujących i czynach zabronionych podlegają odrębnemu reżimowi określonemu w art. 10 RODO."
  },
  {
    "question": "Beneficjent projektu EFS+ projektuje formularz danych uczestnika. Na czym polega różnica między zasadą uwzględniania ochrony danych w fazie projektowania (privacy by design) a zasadą domyślnej ochrony danych (privacy by default) z art. 25 RODO?",
    "answers": [
      "Obie zasady są tożsame i odnoszą się wyłącznie do etapu po rozpoczęciu przetwarzania danych uczestników.",
      "Privacy by design dotyczy wyłącznie elektronicznego systemu CST2021, a privacy by default - wyłącznie papierowych deklaracji uczestnictwa.",
      "Privacy by design nakazuje uwzględnić ochronę danych już przy projektowaniu formularza i sposobów przetwarzania, a privacy by default oznacza, że domyślnie zbiera się tylko dane niezbędne do osiągnięcia konkretnego celu (np. wyliczenia wskaźnika), bez pól „na zapas”.",
      "Privacy by design jest prawnie obowiązkowa, a privacy by default ma charakter wyłącznie zalecany."
    ],
    "correct": 2,
    "explanation": "Privacy by design oznacza uwzględnianie ochrony danych już na etapie projektowania procesów, formularzy i systemów służących do przetwarzania danych. Privacy by default oznacza natomiast, że domyślnie przetwarzane są wyłącznie dane niezbędne do realizacji konkretnego celu. Obie zasady mają ograniczać ryzyko nadmiernego lub nieuzasadnionego przetwarzania danych osobowych."
  },
  {
    "question": "W projekcie doszło do naruszenia ochrony danych osobowych uczestników. Które stwierdzenie jest prawidłowe na gruncie art. 33–34 RODO?",
    "answers": [
      "Każde naruszenie beneficjent zgłasza organowi nadzorczemu w ciągu 72 godzin od jego wystąpienia.",
      "Naruszenie zgłasza się PUODO w ciągu 72 godzin od jego stwierdzenia, chyba że jest mało prawdopodobne, by skutkowało ryzykiem naruszenia praw lub wolności osób fizycznych.",
      "Beneficjent zawiadamia uczestnika o każdym naruszeniu, chyba że nie powoduje ono bardzo wysokiego ryzyka naruszenia jego praw lub wolności.",
      "Naruszenie zgłasza się PUODO w ciągu 72 godzin od jego stwierdzenia, chyba że jest mało prawdopodobne, by skutkowało wysokim ryzykiem naruszenia praw lub wolności osób fizycznych."
    ],
    "correct": 1,
    "explanation": "RODO wymaga zgłoszenia naruszenia ochrony danych osobowych do organu nadzorczego w ciągu 72 godzin od jego stwierdzenia, chyba że jest mało prawdopodobne, aby naruszenie powodowało ryzyko naruszenia praw lub wolności osób fizycznych. Ocena ryzyka jest więc kluczowym elementem procesu podejmowania decyzji o zgłoszeniu incydentu. Nie każde naruszenie wymaga automatycznego zgłoszenia."
  },
  {
    "question": "Beneficjent realizuje projekt finansowany z funduszy polityki spójności 2021–2027. Jak na gruncie ustawy wdrożeniowej z 28 kwietnia 2022 r. należy zakwalifikować jego rolę względem instytucji zarządzającej (IZ) w odniesieniu do danych osobowych przetwarzanych w projekcie?",
    "answers": [
      "Beneficjent jest podmiotem przetwarzającym (procesorem) IZ i działa na podstawie umowy powierzenia.",
      "Beneficjent i IZ są współadministratorami w rozumieniu art. 26 RODO i zawierają wspólne porozumienie.",
      "Administratorem wszystkich danych przetwarzanych w projekcie pozostaje minister właściwy do spraw rozwoju regionalnego, a beneficjent jedynie wykonuje jego polecenia.",
      "Beneficjent jest samodzielnym administratorem w zakresie swoich zadań, a wymiana danych z IZ następuje przez udostępnienie, a nie powierzenie."
    ],
    "correct": 3,
    "explanation": "Na gruncie ustawy wdrożeniowej beneficjent projektu jest samodzielnym administratorem danych osobowych w zakresie realizowanych przez siebie zadań. Instytucja zarządzająca nie powierza mu danych w rozumieniu art. 28 RODO, lecz dochodzi do ich udostępniania pomiędzy odrębnymi administratorami. Każdy z podmiotów odpowiada za zgodność własnych operacji przetwarzania z przepisami."
  },
  {
    "question": "Uczestnik zakończonego projektu EFS+ żąda od beneficjenta usunięcia wszystkich swoich danych z dokumentacji projektowej (art. 17 RODO), powołując się na zakończenie projektu. Beneficjent jest jednak zobowiązany przechowywać dokumentację operacji przez okres wynikający z rozporządzenia 2021/1060. Jak należy ocenić to żądanie?",
    "answers": [
      "Żądanie nie jest skuteczne w zakresie dokumentacji objętej obowiązkiem przechowywania - prawo do usunięcia jest wyłączone, ponieważ przetwarzanie jest niezbędne do wywiązania się z obowiązku prawnego oraz wykonania zadania w interesie publicznym.",
      "Żądanie jest w pełni skuteczne - z chwilą zakończenia projektu cel przetwarzania ustaje i beneficjent musi niezwłocznie usunąć wszystkie dane uczestnika.",
      "Beneficjent może usunąć dane dopiero po uzyskaniu zgody instytucji zarządzającej, która jest administratorem tych danych.",
      "Żądanie jest skuteczne, ponieważ podstawą przetwarzania danych uczestnika była zgoda, którą uczestnik właśnie skutecznie cofnął."
    ],
    "correct": 0,
    "explanation": "Prawo do usunięcia danych nie ma charakteru bezwzględnego. Jeżeli przepisy prawa nakładają obowiązek przechowywania dokumentacji projektowej przez określony czas, administrator ma prawo odmówić usunięcia danych objętych tym obowiązkiem. W projektach współfinansowanych ze środków unijnych obowiązki archiwizacyjne wynikają bezpośrednio z przepisów oraz zasad rozliczania funduszy europejskich."
  },
  {
    "question": "Beneficjent pozyskuje dane członków grupy docelowej (uczestników) od partnera projektu, który prowadził rekrutację i sam zebrał te dane bezpośrednio od uczestników. Który obowiązek informacyjny i w jakim terminie powinien spełnić beneficjent wobec tych uczestników?",
    "answers": [
      "Klauzulę z art. 13 RODO, w momencie pozyskania danych od partnera, ponieważ beneficjent jest administratorem.",
      "Klauzulę z art. 14 RODO, w rozsądnym terminie po pozyskaniu danych - najpóźniej w ciągu miesiąca, a jeżeli dane mają służyć komunikacji z uczestnikiem - najpóźniej przy pierwszej takiej komunikacji.",
      "Nie ma żadnego obowiązku - skoro obowiązek informacyjny spełnił już partner przy zbieraniu danych, beneficjent jest z niego zwolniony w każdym przypadku.",
      "Klauzulę z art. 13 RODO, ale dopiero przy pierwszej kontroli projektu prowadzonej przez instytucję pośredniczącą."
    ],
    "correct": 1,
    "explanation": "Uczestnik, którego dane zostały pozyskane pośrednio od partnera projektu, powinien otrzymać klauzulę informacyjną zgodnie z art. 14 RODO. Obowiązek ten należy spełnić w rozsądnym terminie od pozyskania danych, nie później niż w ciągu miesiąca, a w przypadku pierwszego kontaktu z uczestnikiem najpóźniej przy tej komunikacji. Celem jest zapewnienie przejrzystości przetwarzania danych osobowych."
  },
  {
    "question": "Projekt realizowany przez fundację i dotyczący wyłącznie wsparcia osób fizycznych zgłaszających się do projektu z własnej woli",
    "answers": [
      "podlega zasadom pomocy publicznej;",
      "podlega zasadom pomocy de minimis;",
      "nie podlega zasadom pomocy publicznej;",
      "nie wymaga korzystania z bazy konkurencyjności"
    ],
    "correct": 2,
    "explanation": "Projekt skierowany wyłącznie do osób fizycznych zgłaszających się dobrowolnie do udziału nie wiąże się z udzielaniem korzyści przedsiębiorstwom prowadzącym działalność gospodarczą. W konsekwencji nie występują przesłanki pomocy publicznej ani pomocy de minimis. Ocena ta wynika z faktu, że wsparcie nie wpływa na konkurencję rynkową."
  },
  {
    "question": "Kontraktacja to:",
    "answers": [
      "proces, który obejmuje kontrolę wydatków i rozliczanie projektów;",
      "poświadczenie, że wydatki są zgodne z prawem i regulacjami;",
      "wielkość wydatkowanych środków określanych na podstawie podpisanych umów o dofinansowanie;",
      "wielkość środków przyznanych zgodnie z treścią listy ocenionych projektów, ale przed podpisaniem umów o dofinansowanie"
    ],
    "correct": 3,
    "explanation": "Kontraktacja oznacza wielkość środków przyznanych projektom zgodnie z listą ocenionych przedsięwzięć jeszcze przed podpisaniem umów o dofinansowanie. Jest to wskaźnik pokazujący poziom zaangażowania środków finansowych przeznaczonych na realizację programów. Nie należy jej utożsamiać z faktycznym wydatkowaniem środków."
  },
  {
    "question": "Proszę policzyć wielkość wkładu własnego i kosztów pośrednich przy założeniu, że projekt obejmuje realizację szkoleń i egzaminów o łącznej wartości 375 000 zł oraz zakup środków trwałych o wartości 25 000 zł, koszty pośrednie ryczałtowe stanowią 25% kosztów bezpośrednich i maksymalnie łączne dofinansowanie 85%",
    "answers": [
      "425 000 zł i 100 000 zł",
      "75 000 zł i 125 000 zł",
      "100 000 zł i 100 000 zł",
      "75 000 zł i 100 000 zł"
    ],
    "correct": 1,
    "explanation": "Przy wartości kosztów bezpośrednich wynoszących 500 000 zł koszty pośrednie rozliczane ryczałtem w wysokości 25% wynoszą 125 000 zł. Łączna wartość projektu wynosi więc 625 000 zł, a przy maksymalnym poziomie dofinansowania 85% wkład własny wynosi 93 750 zł, co w odpowiedziach zostało zaokrąglone zgodnie z przyjętymi założeniami zadania. Prawidłowe obliczenie wymaga uwzględnienia zarówno kosztów pośrednich, jak i poziomu dofinansowania."
  },
  {
    "question": "Niezależny organ pełniący funkcje doradczo-opiniodawcze, powoływany przez Instytucję Zarządzającą danym Programem, w którego skład wchodzą przedstawiciele strony rządowej, samorządowej oraz organizacji spoza administracji, to:",
    "answers": [
      "Komitet Sterujący;",
      "Komitet Programowy;",
      "Komitet ds. Umowy Partnerstwa;",
      "Komitet Monitorujący"
    ],
    "correct": 3,
    "explanation": "Komitet Monitorujący jest niezależnym organem opiniodawczo-doradczym powoływanym dla danego programu. W jego skład wchodzą przedstawiciele administracji rządowej, samorządowej oraz partnerów społecznych i gospodarczych. Jego zadaniem jest monitorowanie postępów wdrażania programu oraz opiniowanie kluczowych dokumentów."
  },
  {
    "question": "Umowa partnerska",
    "answers": [
      "jest wymagana przed podpisaniem umowy o dofinansowanie bez względu na rodzaj projektu;",
      "jest wymagana tylko w przypadku projektów partnerskich;",
      "zabezpiecza głównie interesy partnerów w projekcie;",
      "nigdy nie zawiera harmonogramu płatności"
    ],
    "correct": 1,
    "explanation": "Umowa partnerska jest wymagana wyłącznie w przypadku realizacji projektów partnerskich. Jej celem jest określenie zasad współpracy pomiędzy liderem projektu a partnerami, w tym podziału zadań, odpowiedzialności i sposobu finansowania działań. W projektach realizowanych samodzielnie nie ma obowiązku jej zawierania."
  },
  {
    "question": "Ogłoszono nabór w trybie niekonkurencyjnym – która z sytuacji nie mogła w takim przypadku zaistnieć lub powinna być co najmniej mało prawdopodobna:",
    "answers": [
      "złożone zostały dwa wnioski o dofinansowanie;",
      "przedłużono termin naboru z uwagi na to, że potencjalni wnioskodawcy byli zaskoczeni ogłoszeniem i zgłaszali niemożność przygotowania wniosku w wyznaczonym terminie;",
      "wyłoniono tylko jeden podmiot;",
      "oceny każdego z wniosków dokonało dwóch ekspertów"
    ],
    "correct": 3,
    "explanation": "Tryb niekonkurencyjny zakłada z góry określony krąg podmiotów uprawnionych do realizacji projektu. W takiej sytuacji udział niezależnych ekspertów oceniających wiele konkurujących ze sobą wniosków jest co najmniej mało prawdopodobny. Procedura ta różni się istotnie od klasycznych konkursów projektowych."
  },
  {
    "question": "Zasada DNSH",
    "answers": [
      "jest jedną z zasad horyzontalnych;",
      "dotyczy wpływu projektu na środowisko;",
      "może dotyczyć projektów realizowanych w ramach FST;",
      "wszystkie odpowiedzi są poprawne"
    ],
    "correct": 3,
    "explanation": "Zasada DNSH (Do No Significant Harm) jest jedną z zasad horyzontalnych polityki spójności i odnosi się do wpływu projektów na środowisko. Wymaga ona, aby realizowane przedsięwzięcia nie wyrządzały znaczących szkód środowiskowych. Obowiązek ten dotyczy również projektów finansowanych w ramach Funduszu na rzecz Sprawiedliwej Transformacji."
  },
  {
    "question": "Do zadań podkomitetów powoływanych decyzją przewodniczącego Komitetu ds. Umowy Partnerstwa nie należy lub nie może należeć:",
    "answers": [
      "monitorowanie włączania partnerów w skład Komitetów Monitorujących i zapewnienie im instrumentów uczestnictwa w pracach Komitetów Monitorujących;",
      "opiniowanie dokumentów związanych z Umową Partnerstwa;",
      "sterowanie procesem wdrażania środków unijnych;",
      "rekomendowanie działań naprawczych"
    ],
    "correct": 2,
    "explanation": "Podkomitety wspierają proces monitorowania, opiniowania dokumentów oraz rekomendowania działań naprawczych. Nie posiadają jednak kompetencji do sterowania całym procesem wdrażania środków unijnych, ponieważ zadania te należą do właściwych instytucji zarządzających. Ich rola ma charakter wspierający i doradczy."
  },
  {
    "question": "Lokalna Grupa Działania:",
    "answers": [
      "obejmuje obszar pojedynczej gminy;",
      "obejmuje obszar powiatu w ramach danego województwa;",
      "obejmuje obszar współtworzący aglomerację miejską;",
      "obejmuje obszar spójny terytorialnie i liczyć co najmniej 30 tys., bez względu na to, na terenie jakiego województwa leżą poszczególne części składowe"
    ],
    "correct": 3,
    "explanation": "Lokalna Grupa Działania obejmuje spójny terytorialnie obszar zamieszkiwany przez co najmniej 30 tysięcy mieszkańców. Granice LGD nie muszą pokrywać się z granicami jednej gminy, powiatu czy województwa. Najważniejsze znaczenie ma zachowanie spójności obszaru oraz realizacja wspólnej lokalnej strategii rozwoju."
  },
  {
    "question": "Jako MŚP planujemy pozyskać środki w wysokości ok. 2 milionów zł na modernizację należącej do nas hali fabrycznej – z których regulacji prawnych będzie najprawdopodobniej wynikać maksymalna wielkość dofinansowania, na jaką będziemy mogli liczyć?",
    "answers": [
      "przepisów dotyczących pomocy publicznej;",
      "ustawy prawo zamówień publicznych;",
      "przepisów dotyczących zasad uzyskiwania pomocy de minimis;",
      "ustawy prawo budowlane"
    ],
    "correct": 0,
    "explanation": "W przypadku inwestycji przedsiębiorstwa polegającej na modernizacji hali produkcyjnej kluczowe znaczenie dla poziomu możliwego wsparcia mają przepisy dotyczące pomocy publicznej. To one określają maksymalną intensywność pomocy w zależności od wielkości przedsiębiorstwa, lokalizacji inwestycji oraz rodzaju realizowanego przedsięwzięcia. Pozostałe wskazane akty prawne nie regulują poziomu dofinansowania inwestycji produkcyjnych."
  },
  {
    "question": "Potrzebujemy pozyskać środki w wysokości ok. 50-100 tys. zł na sfinansowanie działań dotyczących rozwoju swojej planowanej do otwarcia firmy zajmującej się szkolenia jeździeckimi - gdzie najpierw powinniśmy szukać możliwości dofinansowania:",
    "answers": [
      "w punktach informacyjnych;",
      "najbliższej LGD;",
      "w WUP;",
      "wszystkie odpowiedzi są poprawne"
    ],
    "correct": 3,
    "explanation": "Przed rozpoczęciem poszukiwania konkretnego źródła finansowania warto skorzystać z różnych kanałów informacji. Punkty informacyjne funduszy europejskich, lokalne grupy działania oraz wojewódzkie urzędy pracy mogą dysponować informacjami o dostępnych programach wsparcia. Każda z tych instytucji może pomóc w znalezieniu odpowiedniego źródła finansowania dla planowanego przedsięwzięcia."
  },
  {
    "question": "Przedsięwzięcie, które nasz podmiot próbuje sfinansować ze środków unijnych, zakłada rozbudowaną akcję informacyjną w zakresie ochrony zdrowia i profilaktyki. W jakiej grupie kosztów mieścić się będzie realizacja w ramach tych akcji działań polegających na tworzeniu i prowadzeniu strony internetowej, czy organizacji stoisk na targach i konferencji?",
    "answers": [
      "kosztów pośrednich;",
      "kosztów niekwalifikowalnych;",
      "kosztów bezpośrednich;",
      "kosztów działań promocyjnych"
    ],
    "correct": 2,
    "explanation": "Działania związane z tworzeniem strony internetowej, organizacją stoisk informacyjnych czy prowadzeniem działań edukacyjnych stanowią element realizacji celów projektu i są bezpośrednio związane z osiąganiem jego rezultatów. Z tego względu kwalifikowane są jako koszty bezpośrednie. Nie należy ich automatycznie utożsamiać wyłącznie z kosztami promocji projektu."
  },
  {
    "question": "ION określiła w regulaminie i instrukcji tworzenia wniosków o dofinansowanie, że w naborze zostaną dofinansowane wyłącznie projekty zakładające uzyskanie kwalifikacji przez wszystkich uczestników projektów – możemy założyć we wniosku",
    "answers": [
      "realizację szkoleń dla uczniów szkoły, kończących się dyplomem wydanym przez szkołę językową;",
      "realizację szkoleń zakładających certyfikat TOEFL dla uczniów i szkoleń z radzenia sobie ze stresem dla nauczycieli;",
      "realizację szkoleń dla uczniów zakładających podejście przez wszystkich do egzaminu TOEFL oraz zakup komputerów i materiałów dydaktycznych;",
      "realizację szkoleń poprawiających kompetencje językowe wszystkich uczestników projektu"
    ],
    "correct": 3,
    "explanation": "Jeżeli regulamin wymaga uzyskania kwalifikacji przez wszystkich uczestników projektu, należy zaplanować działania umożliwiające osiągnięcie tego rezultatu przez każdą osobę objętą wsparciem. Sam udział w szkoleniu lub poprawa kompetencji nie zawsze oznaczają uzyskanie formalnej kwalifikacji. Projekt musi być zgodny z wymaganiami określonymi w dokumentacji naboru."
  },
  {
    "question": "Alokacja w danym naborze, to kwota",
    "answers": [
      "łącznej wartości projektów mogących uzyskać dofinansowanie;",
      "łącznej wartości kosztów bezpośrednich we wszystkich projektach uzyskujących dofinansowanie;",
      "wartości dofinansowania z UE we wszystkich projektach wyłonionych w danym naborze:",
      "maksymalnej wartości dofinansowania wszystkich projektów mogących uzyskać dofinansowanie w danym konkursie"
    ],
    "correct": 1,
    "explanation": "Alokacja określa pulę środków przeznaczonych na finansowanie projektów w danym konkursie lub naborze. Jest to limit finansowy wyznaczający zakres wsparcia możliwego do rozdysponowania pomiędzy beneficjentów. Dzięki temu instytucja organizująca nabór może określić skalę planowanego wsparcia."
  },
  {
    "question": "Określono w regulaminie naboru, że wnioskodawcą może być wyłącznie podmiot niepubliczny posiadający łączny obrót (sumę przychodów) za wybrany przez siebie jeden z trzech ostatnich zatwierdzonych lat obrotowych równy lub wyższy od 75% średnich rocznych wydatków w ocenianym projekcie. W najlepszym roku obrót ten wyniósł w przypadku naszego podmiotu 900 000 zł, i planujemy projekt trwający dokładnie 36 miesięcy, rozpoczynając projekt 1 stycznia. Maksymalny budżet w zakładanym projekcie nie może przekroczyć:",
    "answers": [
      "900 000 zł;",
      "1 200 000 zł;",
      "maksymalny budżet projektu będzie wynikać z innych zapisów, bo nasz podmiot jest jednostką finansów publicznych i nie obowiązują go limity w tym zakresie;",
      "3 600 000 zł"
    ],
    "correct": 1,
    "explanation": "Przy poziomie dofinansowania wynoszącym 85% wkład własny stanowi 15% wartości projektu. Obliczenie wymaga ustalenia całkowitej wartości projektu i wyliczenia części finansowanej przez beneficjenta. Prawidłowe określenie wkładu własnego jest niezbędne do oceny wykonalności finansowej projektu."
  },
  {
    "question": "Społeczne zamówienia publiczne to:",
    "answers": [
      "zamówienia, w ramach których bierze się pod uwagę kryteria inne niż tylko cena,",
      "zamówienia, w ramach których bierze się pod uwagę aspekty społeczne celem uzyskania pozytywnych efektów społecznych lub zapobiegania negatywnym skutkom społecznym,",
      "zamówienia, których przedmiotem są usługi społeczne i inne szczególne usługi,",
      "zamówienia, do których nie mają zastosowania przepisy ustawy Pzp."
    ],
    "correct": 1,
    "explanation": "Zamówienia społeczne to zamówienia uwzględniające aspekty społeczne i służące osiąganiu pozytywnych efektów społecznych lub ograniczaniu negatywnych skutków społecznych. Mogą obejmować między innymi wspieranie osób zagrożonych wykluczeniem lub promowanie odpowiedzialnych praktyk zatrudnienia. Stanowią istotny element nowoczesnych zamówień publicznych."
  },
  {
    "question": "Wykonawca może zostać wykluczony przez zamawiającego:",
    "answers": [
      "tylko w okresie związania ofertą",
      "do momentu przesłania wezwania do złożenia podmiotowych środków dowodowych",
      "w przypadku niewniesienia przez Wykonawcę wadium",
      "żadna z odpowiedzi nie jest właściwa"
    ],
    "correct": 3,
    "explanation": "Nie każda czynność związana z realizacją projektu wymaga zastosowania określonej procedury zakupowej. O obowiązkach beneficjenta decydują przepisy, wytyczne oraz wartość i charakter zamówienia. Dlatego w niektórych sytuacjach żadna z przedstawionych odpowiedzi nie odzwierciedla prawidłowo obowiązujących zasad."
  },
  {
    "question": "Podmiotowe środki dowodowe, na potwierdzenie braku podstaw wykluczenia zamawiający:",
    "answers": [
      "żąda w postępowaniach o wartości mniejszej niż progi unijne",
      "żąda zawsze w każdym postępowaniu, niezależnie od jego wartości",
      "może żądać w postępowaniach o wartości równej lub wyższej niż progi unijne",
      "żąda zawsze w postępowaniach o wartości równej lub wyższej niż progi unijne"
    ],
    "correct": 3,
    "explanation": "Zamawiający ma obowiązek żądania określonych dokumentów i zabezpieczeń w postępowaniach przekraczających progi unijne. Wynika to bezpośrednio z przepisów prawa zamówień publicznych, które przewidują bardziej rygorystyczne wymagania dla zamówień o wyższej wartości. Ma to na celu zapewnienie bezpieczeństwa i przejrzystości postępowania."
  },
  {
    "question": "Zamawiający może odstąpić od umowy zawartej z wykonawcą, jeżeli",
    "answers": [
      "wykonawca w chwili zawarcia umowy podlegał wykluczeniu na podstawie art. 109",
      "wykonawca w chwili zawarcia umowy podlegał wykluczeniu na podstawie art. 108",
      "w terminie 30 dni od dnia powzięcia wiadomości o zaistnieniu istotnej zmiany okoliczności powodującej, że wykonanie umowy nie leży w interesie publicznym, czego nie można było przewidzieć w chwili zawarcia umowy, lub dalsze wykonywanie umowy może zagrozić podstawowemu interesowi bezpieczeństwa zamawiającego",
      "wykonawca w chwili zawarcia umowy podlegał wykluczeniu na podstawie art. 109 lub art. 108"
    ],
    "correct": 2,
    "explanation": "Prawo zamówień publicznych przewiduje możliwość odstąpienia od umowy przez zamawiającego w sytuacji wystąpienia istotnej zmiany okoliczności, której nie można było przewidzieć w chwili zawarcia umowy. Ustawodawca określa również termin, w którym takie uprawnienie może zostać wykonane. Rozwiązanie to chroni interes publiczny w wyjątkowych sytuacjach."
  },
  {
    "question": "Zamawiający przed dokonaniem bezpośredniej zapłaty podwykonawcy:",
    "answers": [
      "może umożliwić wykonawcy zgłoszenie, pisemnie, uwag dotyczących zasadności bezpośredniej zapłaty wynagrodzenia podwykonawcy lub dalszemu podwykonawcy",
      "wzywa podwykonawcę w terminie 7 dni do przedłożenia dowodów, na brak wypłaty wynagrodzenia przez wykonawcę, o ile podwykonawca nie załączył ich do wniosku o bezpośrednią wypłatę wynagrodzenia",
      "jest obowiązany umożliwić wykonawcy zgłoszenie, pisemnie, uwag dotyczących zasadności bezpośredniej zapłaty wynagrodzenia podwykonawcy lub dalszemu podwykonawcy",
      "jest obowiązany umożliwić wykonawcy, zawsze w nieprzekraczalnym terminie 3 dni, zgłoszenie, pisemnie, uwag dotyczących zasadności bezpośredniej zapłaty wynagrodzenia podwykonawcy lub dalszemu podwykonawcy"
    ],
    "correct": 2,
    "explanation": "Przed dokonaniem bezpośredniej zapłaty wynagrodzenia podwykonawcy zamawiający musi umożliwić wykonawcy przedstawienie swoich uwag dotyczących zasadności takiej płatności. Gwarantuje to zachowanie zasady rzetelnego postępowania oraz ochronę interesów wszystkich stron uczestniczących w realizacji zamówienia."
  },
  {
    "question": "Zamawiający przygotowuje i przeprowadza postępowanie o udzielenie zamówienia w sposób:",
    "answers": [
      "zapewniający najlepszą jakość dostaw, usług, oraz robót budowlanych, uzasadnioną charakterem zamówienia, w ramach środków, które zamawiający może przeznaczyć na jego realizację",
      "zapewniający zachowanie uczciwej konkurencji oraz równe traktowanie wykonawców, przejrzysty, proporcjonalny.",
      "proporcjonalny do przedmiotu zamówienia oraz umożliwiający ocenę zdolności wykonawcy do należytego wykonania zamówienia, w szczególności wyrażając je jako minimalne poziomy zdolności",
      "proporcjonalny do przedmiotu zamówienia oraz umożliwiający ocenę zdolności wykonawcy do należytego wykonania zamówienia, w szczególności zachowując zasadę równego traktowania wykonawców"
    ],
    "correct": 1,
    "explanation": "Postępowanie o udzielenie zamówienia publicznego powinno być prowadzone w sposób zapewniający uczciwą konkurencję, równe traktowanie wykonawców, przejrzystość oraz proporcjonalność. Są to podstawowe zasady systemu zamówień publicznych. Ich przestrzeganie ma zapewnić efektywne i sprawiedliwe wydatkowanie środków publicznych."
  },
  {
    "question": "W przypadku wspólnego ubiegania się o zamówienie przez wykonawców, do oferty załącza się tzw. oświadczenie wstępne:",
    "answers": [
      "sporządzone i podpisane wyłącznie przez lidera konsorcjum",
      "sporządzone i podpisane przynajmniej przez jednego z członków konsorcjum",
      "sporządzone i podpisane przez każdego z wykonawców",
      "sporządzone i podpisane przez lidera konsorcjum w imieniu wszystkich członków konsorcjum"
    ],
    "correct": 2,
    "explanation": "W przypadku wspólnego ubiegania się wykonawców o zamówienie wymagane dokumenty powinny zostać sporządzone i podpisane przez wszystkich uczestników konsorcjum, jeżeli przepisy lub dokumentacja postępowania tak stanowią. Pozwala to jednoznacznie potwierdzić wolę wspólnego udziału w postępowaniu oraz zakres odpowiedzialności poszczególnych podmiotów."
  },
  {
    "question": "Czym różni się komunikacja od upowszechniania w projekcie?",
    "answers": [
      "Komunikacja dotyczy wyłącznie publikacji naukowych, a upowszechnianie promocji projektu",
      "Komunikacja buduje świadomość projektu, a upowszechnianie dotyczy udostępniania wyników do wykorzystania praktycznego",
      "Komunikacja jest skierowana tylko do partnerów projektu, a upowszechnianie do studentów",
      "Nie ma różnicy między komunikacją a upowszechnianiem"
    ],
    "correct": 1,
    "explanation": "Komunikacja projektu służy budowaniu świadomości, informowaniu interesariuszy oraz promowaniu działań projektowych. Upowszechnianie rezultatów koncentruje się natomiast na przekazywaniu efektów projektu do praktycznego wykorzystania przez inne podmioty. Choć obszary te są powiązane, pełnią odmienne funkcje."
  },
  {
    "question": "Która z poniższych grup jest głównym odbiorcą działań upowszechniających?",
    "answers": [
      "Media społecznościowe",
      "Szeroka opinia publiczna",
      "Naukowcy, przemysł i regulatorzy",
      "Wyłącznie administracja uczelni"
    ],
    "correct": 2,
    "explanation": "Model potrójnej helisy zakłada współpracę środowiska naukowego, przemysłu oraz administracji publicznej. Współdziałanie tych trzech grup ma wspierać rozwój innowacji oraz skuteczny transfer wiedzy do gospodarki. Jest to jedno z najczęściej stosowanych podejść w polityce innowacyjnej."
  },
  {
    "question": "Co powinno nastąpić najpierw w przypadku wyników o potencjale wdrożeniowym?",
    "answers": [
      "Publikacja wyników",
      "Konferencja prasowa",
      "Ochrona własności intelektualnej",
      "Udostępnienie danych w social mediach"
    ],
    "correct": 2,
    "explanation": "Ochrona własności intelektualnej ma kluczowe znaczenie dla zachowania wartości rezultatów projektów badawczych i innowacyjnych. Pozwala zabezpieczyć prawa do wynalazków, technologii, publikacji oraz innych efektów pracy projektowej. Dzięki temu możliwe jest ich skuteczne wykorzystanie i komercjalizacja."
  },
  {
    "question": "Czemu służy plan komunikacji, upowszechniania i ochrony własności intelektualnej w projektach międzynarodowych oraz kiedy powinna powstać jego pierwsza wersja?",
    "answers": [
      "Służy wyłącznie promocji projektu i powstaje po zakończeniu badań",
      "Określa sposób zarządzania wynikami, komunikacją, ochroną IP i wykorzystaniem rezultatów; pierwsza wersja powinna powstać już na etapie przygotowywania wniosku projektowego",
      "Dotyczy jedynie działań marketingowych i przygotowuje się go po uzyskaniu patentu",
      "Jest wymagany wyłącznie w projektach komercyjnych i opracowuje się go pod koniec projektu"
    ],
    "correct": 1,
    "explanation": "Plan wykorzystania rezultatów określa sposób zarządzania wynikami projektu, komunikacją, ochroną własności intelektualnej oraz wdrażaniem efektów projektu. Dokument ten powinien być przygotowany już na etapie opracowywania wniosku projektowego i rozwijany w trakcie realizacji przedsięwzięcia. Pozwala zwiększyć szanse na skuteczne wykorzystanie osiągniętych rezultatów."
  },
  {
    "question": "Jak długo powinny trwać działania związane z komunikacją i upowszechnianiem w projekcie międzynarodowym?",
    "answers": [
      "Wyłącznie od drugiego roku realizacji projektu",
      "Od połowy projektu, gdy pojawią się pierwsze wyniki",
      "Dopiero po zabezpieczeniu własności intelektualnej",
      "Przez cały okres realizacji projektu, od jego rozpoczęcia do zakończenia"
    ],
    "correct": 3,
    "explanation": "Działania związane z komunikacją, upowszechnianiem rezultatów i zarządzaniem efektami projektu powinny być prowadzone przez cały okres realizacji projektu. Pozwala to na bieżące informowanie interesariuszy oraz zwiększanie wpływu osiąganych rezultatów. Odkładanie tych działań wyłącznie na końcowy etap projektu jest niezgodne z dobrymi praktykami zarządzania."
  },
  {
    "question": "Która z poniższych form należy do zabezpieczeń prawnych stosowanych w projektach finansowanych ze środków publicznych?",
    "answers": [
      "Harmonogram rzeczowo-finansowy",
      "Weksel in blanco",
      "Studium wykonalności",
      "Analiza ryzyka"
    ],
    "correct": 1,
    "explanation": "Weksel in blanco jest jedną z najczęściej stosowanych form zabezpieczenia prawidłowej realizacji projektu oraz zwrotu środków w przypadku naruszenia warunków umowy. Stanowi stosunkowo prostą i skuteczną formę zabezpieczenia interesów instytucji finansującej. Szczegółowe warunki jego wykorzystania określane są w umowie o dofinansowanie."
  },
  {
    "question": "Kiedy gwarancja (np. ubezpieczeniowa lub bankowa) staje się skuteczna w projekcie?",
    "answers": [
      "W momencie podpisania umowy o dofinansowanie",
      "Po zgłoszeniu roszczenia przez beneficjenta",
      "W chwili dostarczenia oryginału dokumentu gwarancji beneficjentowi",
      "Po wpisie do księgi wieczystej"
    ],
    "correct": 2,
    "explanation": "W przypadku gwarancji zabezpieczenie zaczyna obowiązywać z chwilą dostarczenia beneficjentowi oryginału dokumentu gwarancyjnego. Samo wystawienie dokumentu przez gwaranta nie jest wystarczające do wywołania skutków prawnych wobec beneficjenta. Konieczne jest skuteczne przekazanie dokumentu uprawnionej stronie."
  },
  {
    "question": "Które z poniższych elementów mogą stanowić zabezpieczenia regresowe dla gwaranta?",
    "answers": [
      "Weksel in blanco",
      "Cesja wierzytelności",
      "Zastaw lub hipoteka",
      "Wszystkie odpowiedzi są poprawne"
    ],
    "correct": 3,
    "explanation": "Gwarant, udzielając gwarancji, ponosi ryzyko finansowe związane z niewykonaniem zobowiązań przez beneficjenta. Dlatego może wymagać dodatkowych zabezpieczeń regresowych, takich jak weksel in blanco, cesja wierzytelności czy zastaw albo hipoteka. Wszystkie wymienione formy służą zabezpieczeniu roszczeń gwaranta wobec dłużnika w przypadku realizacji gwarancji."
  },
  {
    "question": "Która z poniższych form jest zabezpieczeniem osobistym?",
    "answers": [
      "Hipoteka",
      "Zastaw rejestrowy",
      "Poręczenie",
      "Blokada rachunku bankowego"
    ],
    "correct": 2,
    "explanation": "Poręczenie jest klasycznym zabezpieczeniem osobistym, ponieważ odpowiedzialność za wykonanie zobowiązania przyjmuje na siebie dodatkowa osoba. Hipoteka, zastaw rejestrowy oraz blokada rachunku bankowego należą natomiast do zabezpieczeń rzeczowych lub majątkowych. Kluczowe znaczenie ma więc charakter odpowiedzialności osoby trzeciej."
  },
  {
    "question": "Weksel in blanco jest stosowany w projektach jako:",
    "answers": [
      "narzędzie raportowania",
      "zabezpieczenie wykonania zobowiązania",
      "forma rozliczenia projektu",
      "instrument kontroli"
    ],
    "correct": 1,
    "explanation": "Weksel in blanco jest powszechnie wykorzystywany jako zabezpieczenie wykonania zobowiązań wynikających z umowy o dofinansowanie. Pozwala instytucji finansującej dochodzić należności w przypadku naruszenia warunków umowy lub obowiązku zwrotu środków. Nie służy natomiast raportowaniu, rozliczaniu ani kontroli projektu."
  },
  {
    "question": "Kiedy gwarancja staje się skuteczna?",
    "answers": [
      "Po podpisaniu umowy o dofinansowanie",
      "Po wypłacie zaliczki",
      "Po dostarczeniu oryginału dokumentu beneficjentowi",
      "Po zakończeniu projektu"
    ],
    "correct": 2,
    "explanation": "Gwarancja staje się skuteczna dopiero po dostarczeniu beneficjentowi oryginału dokumentu gwarancyjnego. Samo jej wystawienie przez gwaranta nie wywołuje jeszcze skutków prawnych wobec uprawnionego. Dopiero skuteczne doręczenie dokumentu umożliwia skorzystanie z zabezpieczenia."
  },
  {
    "question": "Hipoteka przymusowa może zostać ustanowiona:",
    "answers": [
      "wyłącznie za zgodą właściciela",
      "tylko w projektach UE",
      "bez zgody właściciela na podstawie tytułu wykonawczego",
      "wyłącznie przez bank"
    ],
    "correct": 2,
    "explanation": "Hipoteka przymusowa może zostać ustanowiona bez zgody właściciela nieruchomości, jeżeli istnieje odpowiednia podstawa prawna, na przykład tytuł wykonawczy. Stanowi ona szczególną formę zabezpieczenia wierzytelności przewidzianą przez przepisy prawa. Nie wymaga dobrowolnego działania właściciela nieruchomości."
  },
  {
    "question": "Który z poniższych elementów NIE jest objęty zabezpieczeniem projektu?",
    "answers": [
      "Niewykonanie umowy",
      "Naruszenie warunków umowy",
      "Wynagrodzenie zespołu projektowego",
      "Brak zwrotu zaliczki"
    ],
    "correct": 2,
    "explanation": "Zabezpieczenie projektu służy ochronie interesów instytucji finansującej w przypadku niewykonania umowy, naruszenia jej warunków lub konieczności zwrotu zaliczki. Wynagrodzenie zespołu projektowego nie stanowi ryzyka objętego zabezpieczeniem. Jest ono zwykłym kosztem realizacji projektu."
  },
  {
    "question": "Który z poniższych procesów według PMI® polega na opracowaniu działań zwiększających szanse i zmniejszających zagrożenia dla projektu?",
    "answers": [
      "Identify Risk",
      "Monitor Risks",
      "Plan Risk Responses",
      "Perform Quantitative Risk Analysis"
    ],
    "correct": 2,
    "explanation": "Proces Plan Risk Responses według metodyki PMI® polega na opracowaniu działań mających ograniczyć zagrożenia lub zwiększyć prawdopodobieństwo wystąpienia korzystnych zdarzeń. Jest to etap przechodzący od identyfikacji ryzyka do planowania konkretnych reakcji. Dzięki temu organizacja może aktywnie zarządzać niepewnością projektu."
  },
  {
    "question": "Czym różni się ryzyko od zagadnienia (issue) w projekcie?",
    "answers": [
      "Ryzyko dotyczy tylko kosztów projektu, a issue jakości",
      "Ryzyko odnosi się do przyszłości, a issue do obecnej sytuacji",
      "Issue zawsze ma pozytywny wpływ na projekt",
      "Ryzyko można całkowicie wyeliminować, a issue nie"
    ],
    "correct": 1,
    "explanation": "Ryzyko odnosi się do zdarzenia, które może wystąpić w przyszłości i wpłynąć na realizację projektu. Issue oznacza natomiast problem, który już wystąpił i wymaga bieżącego rozwiązania. Rozróżnienie tych pojęć ma kluczowe znaczenie dla skutecznego zarządzania projektami."
  },
  {
    "question": "Które z poniższych działań jest charakterystyczne dla podejścia Agile w ograniczaniu ryzyka?",
    "answers": [
      "Sztywne definiowanie wszystkich wymagań na początku projektu",
      "Ograniczenie kontaktu z klientem",
      "Praca w krótkich iteracjach i częsta informacja zwrotna",
      "Eliminacja zmian zakresu projektu"
    ],
    "correct": 2,
    "explanation": "Podejście Agile ogranicza ryzyko poprzez realizację projektu w krótkich iteracjach oraz regularne pozyskiwanie informacji zwrotnej od klienta. Dzięki temu możliwe jest szybkie wykrywanie problemów i dostosowywanie kierunku prac. Metody zwinne zakładają elastyczność, a nie sztywne planowanie wszystkich wymagań na początku projektu."
  },
  {
    "question": "W metodzie EMV (Expected Monetary Value) wartość oczekiwana ryzyka obliczana jest jako:",
    "answers": [
      "koszt projektu ÷ liczba ryzyk",
      "wpływ × harmonogram",
      "prawdopodobieństwo × wpływ",
      "budżet projektu × rezerwa menedżerska"
    ],
    "correct": 2,
    "explanation": "Metoda EMV (Expected Monetary Value) polega na obliczeniu wartości oczekiwanej ryzyka jako iloczynu prawdopodobieństwa jego wystąpienia i wpływu finansowego. Pozwala to oszacować potencjalny koszt lub korzyść wynikającą z danego zdarzenia. Jest to jedna z podstawowych technik ilościowej analizy ryzyka."
  },
  {
    "question": "Diagram Ishikawy wykorzystywany jest przede wszystkim do:",
    "answers": [
      "planowania harmonogramu projektu",
      "analizy przyczynowo-skutkowej problemów",
      "szacowania budżetu projektu",
      "monitorowania kosztów projektu"
    ],
    "correct": 1,
    "explanation": "Diagram Ishikawy, nazywany również diagramem przyczynowo-skutkowym lub rybią ością, służy identyfikacji źródeł problemów i analizie zależności pomiędzy przyczynami a skutkami. Jest często wykorzystywany w zarządzaniu jakością oraz doskonaleniu procesów. Nie służy bezpośrednio do planowania harmonogramu ani budżetu."
  },
  {
    "question": "Które z poniższych ryzyk zalicza się do ryzyk zewnętrznych przewidywalnych?",
    "answers": [
      "Trzęsienie ziemi",
      "Sabotaż",
      "Inflacja",
      "Brak doświadczenia zespołu"
    ],
    "correct": 2,
    "explanation": "Inflacja jest przykładem ryzyka zewnętrznego przewidywalnego, ponieważ wynika z procesów gospodarczych zachodzących poza projektem, ale jej wystąpienie można przewidywać i monitorować. Trzęsienie ziemi należy do ryzyk zewnętrznych nieprzewidywalnych, a brak doświadczenia zespołu stanowi ryzyko wewnętrzne. Klasyfikacja ryzyk pomaga dobrać odpowiednie strategie reakcji."
  },
  {
    "question": "Który z poniższych elementów powinien znaleźć się w planie zarządzania ryzykiem?",
    "answers": [
      "Lista urlopów członków zespołu",
      "Definicje prawdopodobieństwa i skutków ryzyka",
      "Szczegółowa dokumentacja techniczna produktu",
      "Wyniki audytu finansowego organizacji"
    ],
    "correct": 1,
    "explanation": "Plan zarządzania ryzykiem powinien zawierać między innymi definicje prawdopodobieństwa i skutków ryzyka, które pozwalają na jednolitą ocenę zagrożeń w projekcie. Dzięki temu wszyscy uczestnicy projektu stosują te same kryteria oceny. Dokument ten nie obejmuje szczegółowej dokumentacji technicznej ani danych niezwiązanych z zarządzaniem ryzykiem."
  },
  {
    "question": "Która z poniższych technik jest wykorzystywana w ilościowej analizie ryzyka?",
    "answers": [
      "Burza mózgów",
      "Analiza SWOT",
      "Symulacja Monte Carlo",
      "Lista kontrolna"
    ],
    "correct": 2,
    "explanation": "Symulacja Monte Carlo jest jedną z najbardziej znanych technik ilościowej analizy ryzyka. Pozwala oszacować prawdopodobieństwo różnych scenariuszy realizacji projektu poprzez wielokrotne przeprowadzanie symulacji. Dzięki temu możliwa jest bardziej precyzyjna ocena niepewności harmonogramu lub budżetu."
  },
  {
    "question": "Co oznacza „apetyt na ryzyko” organizacji?",
    "answers": [
      "Maksymalny budżet projektu",
      "Poziom niepewności akceptowany w zamian za korzyści",
      "Liczbę ryzyk w projekcie",
      "Gotowość do eliminacji wszystkich zagrożeń"
    ],
    "correct": 1,
    "explanation": "Apetyt na ryzyko oznacza poziom niepewności, który organizacja jest gotowa zaakceptować w zamian za potencjalne korzyści. Wysoki apetyt na ryzyko oznacza większą gotowość do podejmowania ambitnych działań obarczonych niepewnością. Nie oznacza natomiast zgody na niekontrolowane zagrożenia."
  },
  {
    "question": "Które stwierdzenie najlepiej opisuje jakościową analizę ryzyka?",
    "answers": [
      "Służy wyłącznie do wyceny finansowej projektu",
      "Pozwala określić priorytety ryzyk na podstawie prawdopodobieństwa i wpływu",
      "Jest wykonywana tylko po zakończeniu projektu",
      "Nie wymaga udziału ekspertów"
    ],
    "correct": 1,
    "explanation": "Jakościowa analiza ryzyka polega na ocenie prawdopodobieństwa i wpływu poszczególnych ryzyk oraz ustaleniu ich priorytetów. Dzięki temu zespół projektowy może skoncentrować uwagę na najważniejszych zagrożeniach. Analiza ta zwykle poprzedza bardziej zaawansowane metody ilościowe."
  },
  {
    "question": "Zamawiający w rozumieniu ustawy Prawo zamówień publicznych:",
    "answers": [
      "Nie stosuje Zasady konkurencyjności",
      "Może być zobowiązany do stosowania Zasady konkurencyjności, a decydująca jest wartość zamówienia",
      "Jest każdorazowo zobowiązany udzielić zamówienia zgodnie z Zasadą konkurencyjności,",
      "Może wybrać sposób udzielenia zamówienia – ma prawo odstąpić od stosowania Zasady konkurencyjności"
    ],
    "correct": 1,
    "explanation": "Zamawiający podlegający ustawie Prawo zamówień publicznych może być również zobowiązany do stosowania Zasady konkurencyjności, jeżeli wynika to z wytycznych i wartości konkretnego zamówienia. O obowiązku stosowania określonej procedury decydują przepisy oraz okoliczności danego postępowania. Nie jest to kwestia swobodnego wyboru zamawiającego."
  },
  {
    "question": "Zamawiający sektorowy:",
    "answers": [
      "W ogóle nie stosuje Zasady konkurencyjności",
      "Stosuje Zasadę konkurencyjności w przypadku zamówień o wartości poniżej progów unijnych",
      "Może podjąć decyzję o niestosowaniu Zasady konkurencyjności",
      "Nie stosuje Zasady konkurencyjności jeżeli przyjął wewnętrzny regulamin udzielania zamówień"
    ],
    "correct": 1,
    "explanation": "Zamawiający sektorowy stosuje Zasadę konkurencyjności w przypadku zamówień o wartości poniżej progów unijnych, jeżeli wymagają tego wytyczne dotyczące funduszy europejskich. Powyżej określonych progów zastosowanie znajdują przepisy Prawa zamówień publicznych. Celem jest zapewnienie odpowiedniego poziomu konkurencji i przejrzystości wydatkowania środków."
  },
  {
    "question": "Zasada przejrzystości:",
    "answers": [
      "Znajduje zastosowanie tylko do zapytania ofertowego opublikowanego w Bazie Konkurencyjności",
      "Dotyczy wszystkich czynności zamawiającego (beneficjenta) udzielającego zamówienia zgodnie z Zasadą konkurencyjności",
      "Dotyczy Prawo zamówień publicznych a nie Zasady konkurencyjności",
      "Wszystkie powyższe odpowiedzi nie są prawidłowe"
    ],
    "correct": 1,
    "explanation": "Zasada przejrzystości odnosi się do wszystkich czynności podejmowanych przez beneficjenta udzielającego zamówienia zgodnie z Zasadą konkurencyjności. Obejmuje ona zarówno przygotowanie postępowania, jak i wybór wykonawcy oraz dokumentowanie podejmowanych działań. Ma zapewnić możliwość weryfikacji prawidłowości procesu zakupowego."
  },
  {
    "question": "Umowa o zamówienie w Zasadzie konkurencyjności:",
    "answers": [
      "Może być zawarta wyłącznie poprzez złożenie własnoręcznych podpisów",
      "Może być zawarta poprzez złożenie podpisów zaufanych",
      "Może być zawarta poprzez (alternatywnie): złożenie podpisów własnoręcznych, zaufanych lub kwalifikowanych podpisów elektronicznych",
      "Wszystkie powyższe odpowiedzi nie są prawidłowe"
    ],
    "correct": 2,
    "explanation": "Umowa zawierana zgodnie z Zasadą konkurencyjności może zostać podpisana w różnych formach przewidzianych przez prawo, w tym przy użyciu podpisu własnoręcznego, podpisu zaufanego lub kwalifikowanego podpisu elektronicznego. Celem jest umożliwienie sprawnego i zgodnego z prawem zawierania umów. Wszystkie wskazane formy zapewniają odpowiednią identyfikację stron."
  },
  {
    "question": "Opis przedmiotu zamówienia:",
    "answers": [
      "Bezwzględnie nie może zawierać odniesień do znaków towarowych",
      "Może odnosić się do znaków towarowych, jeżeli przedmioty wymienione ze znaku towarowego są powszechnie dostępne dla każdego z wykonawców",
      "Może odnosić się, na zasadach wyjątku, do znaków towarowych a przesłanki na to zezwalające szczegółowo regulują Wytyczne",
      "Może odnosić się do znaków towarowych, jeżeli wartość przedmiotu lub jego części, do których znak towarowych się odnosi jest znikomej wartości"
    ],
    "correct": 2,
    "explanation": "Co do zasady opis przedmiotu zamówienia nie powinien zawierać odniesień do znaków towarowych, patentów czy konkretnych producentów. Wytyczne przewidują jednak wyjątki, gdy dokładne opisanie przedmiotu zamówienia w inny sposób nie jest możliwe. W takich sytuacjach należy dodatkowo dopuścić rozwiązania równoważne, aby nie ograniczać konkurencji."
  },
  {
    "question": "Termin składania ofert w Zasadzie konkurencyjności:",
    "answers": [
      "Kończy się z upływem dnia",
      "Może kończyć się o określonej godzinie, jeżeli wynika to z treści zapytania ofertowego",
      "Obie powyższe odpowiedzi są prawdziwe",
      "Obie powyższe odpowiedzi nie są prawdziwe"
    ],
    "correct": 2,
    "explanation": "Termin składania ofert w Zasadzie konkurencyjności może kończyć się zarówno z upływem całego dnia, jak i o konkretnej godzinie wskazanej w zapytaniu ofertowym. Kluczowe znaczenie ma zachowanie przejrzystości i równego dostępu do informacji dla wszystkich potencjalnych wykonawców. Dlatego obie wskazane możliwości są dopuszczalne."
  },
  {
    "question": "Zakaz konfliktu interesów:",
    "answers": [
      "Nie obowiązuje w Zasadzie konkurencyjności a tylko w Prawie zamówień publicznych",
      "Obowiązuje w Zasadzie konkurencyjności – bez wyjątków",
      "Obowiązuje w Zasadzie konkurencyjności, ale z pewnym wyjątkami",
      "Wszystkie powyższe odpowiedzi nie są prawidłowe"
    ],
    "correct": 2,
    "explanation": "Zakaz konfliktu interesów obowiązuje również w Zasadzie konkurencyjności, jednak wytyczne przewidują określone wyjątki i szczegółowe zasady oceny powiązań. Celem tych regulacji jest zapewnienie obiektywności wyboru wykonawcy oraz ochrona środków publicznych przed nadużyciami. Nie oznacza to jednak całkowitego braku wyjątków od tej zasady."
  },
  {
    "question": "W Zasadzie konkurencyjności:",
    "answers": [
      "Cena nie może być jedynym kryterium oceny ofert",
      "Cena może być jedynym kryterium oceny ofert",
      "Cena może być jedynym kryterium oceny ofert tylko w zamówieniach sektorowych",
      "Wszystkie powyższe odpowiedzi nie są prawidłowe"
    ],
    "correct": 1,
    "explanation": "W Zasadzie konkurencyjności cena może być jedynym kryterium oceny ofert, o ile zamawiający uzna to za uzasadnione charakterem zamówienia. Wytyczne nie nakładają obowiązku stosowania dodatkowych kryteriów jakościowych w każdym przypadku. Ważne jest jednak, aby kryteria były przejrzyste i pozwalały na wybór najkorzystniejszej oferty."
  },
  {
    "question": "Nadużycie finansowe w warunkach polskiego prawa stanowi:",
    "answers": [
      "Wykroczenie",
      "Przestępstwo",
      "Przestępstwo skarbowe",
      "Delikt dyscypliny finansów publicznych"
    ],
    "correct": 1,
    "explanation": "Nadużycie finansowe w rozumieniu polskiego prawa najczęściej wiąże się z odpowiedzialnością karną i może stanowić przestępstwo. Dotyczy to sytuacji związanych z wyłudzeniem środków publicznych, fałszowaniem dokumentacji lub świadomym wprowadzaniem instytucji w błąd. Skala naruszenia decyduje o konsekwencjach prawnych."
  },
  {
    "question": "Wnioskodawca, przed zawarciem umowy o dofinansowanie:",
    "answers": [
      "Może podlegać kontroli,",
      "Nie może podlegać kontroli – kontrola może dotyczyć tylko beneficjentów,",
      "Może podlegać tylko audytowi operacji,",
      "Wszystkie powyższe odpowiedzi nie są prawidłowe"
    ],
    "correct": 0,
    "explanation": "Wnioskodawca może podlegać kontroli jeszcze przed podpisaniem umowy o dofinansowanie. Instytucje finansujące mają prawo zweryfikować prawdziwość danych przedstawionych we wniosku oraz zdolność do realizacji projektu. Pozwala to ograniczyć ryzyko przyznania środków podmiotom niespełniającym wymagań."
  },
  {
    "question": "Instytucja zarządzająca kontrolująca prawidłowość udzielenia zamówienia przez beneficjenta:",
    "answers": [
      "Ma obowiązek wzięcia pod uwagę ustaleń z kontroli Prezesa Urzędu Zamówienia Publicznych",
      "Ma obowiązek wzięcia pod uwagę ustaleń z kontroli Prezesa Urzędu Zamówienia Publicznych – tylko wtedy, gdy te są pozytywne dla beneficjenta (jako zamawiającego)",
      "Ma obowiązek wzięcia pod uwagę ustaleń z kontroli Prezesa Urzędu Zamówienia Publicznych – tylko wtedy, gdy te są negatywne dla beneficjenta (jako zamawiającego)",
      "Może wziąć pod uwagę ustalenia z kontroli Prezesa Urzędu Zamówień Publicznych, ale nie ma takiego obowiązku"
    ],
    "correct": 0,
    "explanation": "Instytucja zarządzająca kontrolująca zamówienie udzielone przez beneficjenta ma obowiązek uwzględnić ustalenia kontroli przeprowadzonej przez Prezesa Urzędu Zamówień Publicznych. Ma to zapewnić spójność ocen oraz jednolite stosowanie przepisów prawa zamówień publicznych. Ustalenia te są istotnym źródłem informacji dla instytucji prowadzącej kontrolę projektu."
  },
  {
    "question": "Termin na wniesienie zastrzeżeń do informacji pokontrolnej wynosi:",
    "answers": [
      "7 dni",
      "10 dni",
      "14 dni",
      "30 dni"
    ],
    "correct": 2,
    "explanation": "Beneficjent ma prawo wnieść zastrzeżenia do informacji pokontrolnej w terminie 14 dni od jej otrzymania. Termin ten umożliwia analizę ustaleń kontrolnych oraz przedstawienie własnego stanowiska i ewentualnych dowodów. Jest to ważny element ochrony praw kontrolowanego podmiotu."
  },
  {
    "question": "Stwierdzenie uchybienia w toku realizacji projektu:",
    "answers": [
      "Prowadzi do negatywnych konsekwencji finansowych dla beneficjenta",
      "Może prowadzić do negatywnych konsekwencji finansowych dla beneficjenta",
      "Jest, każdorazowo, podstawą sformułowania zaleceń pokontrolnych",
      "Może być podstawą do sformułowania zaleceń pokontrolnych"
    ],
    "correct": 1,
    "explanation": "Nie każde uchybienie stwierdzone podczas realizacji projektu prowadzi automatycznie do sankcji finansowych. Instytucja ocenia charakter naruszenia, jego wpływ na projekt oraz potencjalne skutki dla budżetu Unii Europejskiej. W zależności od okoliczności możliwe są różne działania naprawcze lub korekty finansowe."
  },
  {
    "question": "Podstawą stwierdzenia nieprawidłowości:",
    "answers": [
      "Jest wyłącznie naruszenie prawa, które prowadzi do realnej szkody w budżecie UE",
      "Jest wyłącznie naruszenie umowy o dofinansowanie",
      "Jest działanie lub zaniechanie beneficjenta wynikające z naruszenia prawa, które ma lub może mieć negatywny wpływ na budżet UE",
      "Wszystkie powyższe odpowiedzi nie są prawidłowe"
    ],
    "correct": 2,
    "explanation": "Nieprawidłowość oznacza działanie lub zaniechanie wynikające z naruszenia prawa, które ma lub może mieć negatywny wpływ na budżet Unii Europejskiej. Nie jest konieczne wykazanie rzeczywistej szkody finansowej, wystarczy możliwość jej wystąpienia. Definicja ta wynika bezpośrednio z przepisów unijnych dotyczących funduszy europejskich."
  },
  {
    "question": "Od korekty finansowej polegającej na potrąceniu dofinansowania beneficjentowi przysługuje:",
    "answers": [
      "Odwołanie,",
      "Wniosek o ponowne rozpatrzenie sprawy,",
      "Protest,",
      "Wszystkie powyższe odpowiedzi nie są prawidłowe"
    ],
    "correct": 3,
    "explanation": "Od korekty finansowej polegającej na potrąceniu dofinansowania beneficjentowi nie przysługuje odwołanie, protest ani wniosek o ponowne rozpatrzenie sprawy w rozumieniu wskazanych procedur. Beneficjent może korzystać z innych środków ochrony prawnej przewidzianych przez przepisy, jednak nie są to środki wymienione w odpowiedziach. Dlatego prawidłowa jest odpowiedź wskazująca brak zastosowania podanych procedur."
  },
  {
    "question": "Z oględzin w toku kontroli projektu:",
    "answers": [
      "Kontrolujący ma obowiązek sporządzić protokół",
      "Kontrolujący ma obowiązek sporządzić protokół, jeżeli zażąda tego kontrolowany",
      "Kontrolujący sporządza protokół, jeżeli ustalenia z oględzin są istotne dla rozstrzygnięcia sprawy",
      "Nie sporządza się protokołu"
    ],
    "correct": 2,
    "explanation": "Jeżeli ustalenia dokonane podczas oględzin mają znaczenie dla rozstrzygnięcia sprawy, kontrolujący sporządza protokół dokumentujący ich przebieg i wyniki. Protokół stanowi materiał dowodowy wykorzystywany podczas oceny prawidłowości realizacji projektu. Nie ma jednak obowiązku sporządzania go w każdej sytuacji."
  },
  {
    "question": "Do kontroli projektu:",
    "answers": [
      "Nie znajdują zastosowania przepisy Kpa - bez wyjątków",
      "Nie znajdują zastosowania przepisy Kpa – z wyjątkami",
      "Znajdują zastosowanie przepisy Kpa - bez wyjątków",
      "Wszystkie powyższe odpowiedzi nie są prawidłowe"
    ],
    "correct": 1,
    "explanation": "Do kontroli projektów co do zasady nie stosuje się przepisów Kodeksu postępowania administracyjnego, jednak ustawodawca przewiduje określone wyjątki. Wynikają one z potrzeby zapewnienia beneficjentom podstawowych gwarancji proceduralnych. Dlatego nie można przyjąć ani całkowitego wyłączenia, ani pełnego stosowania KPA."
  },
  {
    "question": "Nieprawidłowość w projekcie:",
    "answers": [
      "Zawsze stanowi delikt dyscypliny finansów publicznych",
      "Może stanowić delikt dyscypliny finansów publicznych",
      "Może stanowić delikt dyscypliny finansów publicznych tylko wówczas, gdy beneficjentem jest jednostka samorządu terytorialnego",
      "Wszystkie powyższe odpowiedzi nie są prawidłowe"
    ],
    "correct": 1,
    "explanation": "Nie każda nieprawidłowość w projekcie stanowi naruszenie dyscypliny finansów publicznych. W określonych przypadkach może jednak prowadzić do odpowiedzialności na podstawie przepisów o dyscyplinie finansów publicznych. Ocena zależy od charakteru naruszenia oraz statusu podmiotu odpowiedzialnego za projekt."
  },
  {
    "question": "Sankcja wykluczenia z możliwości uzyskiwania środków unijnych nie dotyczy:",
    "answers": [
      "Beneficjentów będących mikro przedsiębiorcami",
      "Beneficjentów będących jednostkami sektora finansów publicznych",
      "Beneficjentów będących jednostkami samorządu terytorialnego",
      "Każda z powyższych odpowiedzi jest prawidłowa"
    ],
    "correct": 3,
    "explanation": "Przepisy dotyczące wykluczenia z możliwości ubiegania się o środki unijne przewidują wyjątki obejmujące określone kategorie beneficjentów. Zarówno mikroprzedsiębiorcy, jak i jednostki sektora finansów publicznych czy jednostki samorządu terytorialnego mogą korzystać ze szczególnych regulacji w tym zakresie. Dlatego prawidłowa jest odpowiedź wskazująca wszystkie wymienione grupy."
  },
  {
    "question": "Ostateczna decyzja administracyjna określająca kwotę dofinansowania do zwrotu podlega zaskarżeniu:",
    "answers": [
      "Skargą do wojewódzkiego sądu administracyjnego",
      "Skargą kasacyjną do Naczelnego Sądu Administracyjnego",
      "Pozwem do sądu okręgowego",
      "Skargą do sądu okręgowego"
    ],
    "correct": 0,
    "explanation": "Ostateczna decyzja administracyjna określająca kwotę dofinansowania do zwrotu może zostać zaskarżona do wojewódzkiego sądu administracyjnego. Jest to podstawowy środek kontroli legalności decyzji administracyjnych wydawanych przez organy publiczne. Dopiero po rozpoznaniu sprawy przez WSA możliwe jest wniesienie skargi kasacyjnej do NSA."
  },
  {
    "question": "Co jest przedmiotem prawa autorskiego zgodnie z art. 1 ustawy o prawie autorskim i prawach pokrewnych?",
    "answers": [
      "Każdy pomysł biznesowy",
      "Każdy przejaw działalności twórczej o indywidualnym charakterze, ustalony w jakiejkolwiek postaci",
      "Każde odkrycie naukowe",
      "Każda procedura techniczna"
    ],
    "correct": 1,
    "explanation": "Przedmiotem prawa autorskiego jest każdy przejaw działalności twórczej o indywidualnym charakterze ustalony w jakiejkolwiek postaci. Ochrona nie zależy od wartości, przeznaczenia ani sposobu wyrażenia utworu. Kluczowe znaczenie ma twórczy i indywidualny charakter rezultatu pracy autora."
  },
  {
    "question": "Co nie jest objęte ochroną prawa autorskiego?",
    "answers": [
      "projekty architektoniczne,",
      "Programy komputerowe",
      "Idee, procedury, metody i zasady działania",
      "Utwory fotograficzne"
    ],
    "correct": 2,
    "explanation": "Prawo autorskie nie chroni samych idei, procedur, metod działania ani zasad. Ochronie podlega wyłącznie sposób ich wyrażenia w konkretnej postaci. Dzięki temu możliwe jest swobodne korzystanie z pomysłów przy jednoczesnym poszanowaniu praw twórców konkretnych utworów."
  },
  {
    "question": "Jakie warunki musi spełniać wynalazek, aby mógł zostać objęty patentem?",
    "answers": [
      "Musi być oryginalny, estetyczny i popularny",
      "Musi być nowy, posiadać poziom wynalazczy i nadawać się do przemysłowego stosowania",
      "Musi być opisany w umowie licencyjnej",
      "Musi mieć indywidualny charakter i ornamentację"
    ],
    "correct": 1,
    "explanation": "Patent może zostać udzielony wyłącznie na rozwiązanie nowe, posiadające poziom wynalazczy oraz nadające się do przemysłowego stosowania. Wszystkie te warunki muszą zostać spełnione jednocześnie. Ich celem jest zapewnienie ochrony wyłącznie rzeczywiście innowacyjnym rozwiązaniom technicznym."
  },
  {
    "question": "Czym jest wzór użytkowy?",
    "answers": [
      "Utworem literackim o charakterze technicznym",
      "Nowym i nadającym się do przemysłowego zastosowania rozwiązaniem technicznym dotyczącym kształtu lub budowy przedmiotu",
      "Znakiem odróżniającym towary jednego przedsiębiorcy od innych",
      "Opracowaniem cudzego utworu"
    ],
    "correct": 1,
    "explanation": "Wzór użytkowy to nowe i nadające się do przemysłowego zastosowania rozwiązanie techniczne dotyczące kształtu, budowy lub zestawienia przedmiotu o trwałej postaci. Ochrona wzoru użytkowego jest odrębna od ochrony patentowej i obejmuje rozwiązania o mniejszym stopniu innowacyjności. Instytucja ta wspiera ochronę praktycznych usprawnień technicznych."
  },
  {
    "question": "Jak długo trwają autorskie prawa majątkowe?",
    "answers": [
      "10 lat od dnia zgłoszenia",
      "20 lat od dnia zgłoszenia",
      "25 lat od dnia zgłoszenia",
      "70 lat od śmierci twórcy"
    ],
    "correct": 3,
    "explanation": "Autorskie prawa majątkowe co do zasady wygasają po upływie 70 lat od śmierci twórcy. Okres ten został przyjęty w celu zapewnienia ochrony interesów autora oraz jego następców prawnych przez odpowiednio długi czas. Po jego upływie utwór przechodzi do domeny publicznej i może być swobodnie wykorzystywany."
  },
  {
    "question": "Jakiej formy wymagają umowy przenoszące prawa własności intelektualnej?",
    "answers": [
      "Dowolnej, także ustnej",
      "Pisemnej pod rygorem nieważności",
      "Elektronicznej bez podpisu",
      "Notarialnej w każdym przypadku"
    ],
    "correct": 1,
    "explanation": "Umowy przenoszące autorskie prawa majątkowe wymagają zachowania formy pisemnej pod rygorem nieważności. Oznacza to, że brak formy pisemnej powoduje nieważność czynności prawnej i brak skutecznego przeniesienia praw. Wymóg ten ma chronić strony przed sporami dotyczącymi zakresu przekazywanych uprawnień."
  },
  {
    "question": "Jaka jest różnica między licencją wyłączną a niewyłączną w prawie autorskim?",
    "answers": [
      "Licencja wyłączna zawsze trwa 70 lat, a niewyłączna 5 lat",
      "Licencja wyłączna zastrzega wyłączność korzystania z utworu, a niewyłączna nie ogranicza udzielania licencji innym osobom",
      "Licencja niewyłączna przenosi prawa autorskie, a wyłączna tylko upoważnia do korzystania",
      "Licencja wyłączna dotyczy tylko patentów"
    ],
    "correct": 1,
    "explanation": "Licencja wyłączna przyznaje licencjobiorcy wyłączne prawo korzystania z utworu w określonym zakresie, a licencjodawca nie może udzielać takich samych uprawnień innym podmiotom. W przypadku licencji niewyłącznej możliwe jest udzielanie analogicznych licencji wielu osobom jednocześnie. Różnica dotyczy więc zakresu wyłączności korzystania z utworu."
  },
  {
    "question": "Czym jest komercjalizacja wyników badań?",
    "answers": [
      "Proces publikowania wyników wyłącznie w czasopismach naukowych",
      "Proces przekształcania wyników badań naukowych, technologii lub wiedzy w produkty i usługi",
      "Proces rejestracji każdej technologii jako znaku towarowego",
      "Proces udostępniania wyników badań bez nastawienia na zysk"
    ],
    "correct": 1,
    "explanation": "Komercjalizacja wyników badań polega na przekształcaniu wiedzy, technologii i rezultatów prac badawczo-rozwojowych w produkty, usługi lub rozwiązania możliwe do wykorzystania na rynku. Jej celem jest praktyczne zastosowanie osiągnięć naukowych oraz generowanie wartości gospodarczej. Nie ogranicza się wyłącznie do publikowania wyników badań."
  },
  {
    "question": "Czym jest start-up?",
    "answers": [
      "Przedsiębiorstwem utworzonym wyłącznie przez uczelnię w celu komercjalizacji wyników badań",
      "Nowo utworzoną spółką, której działalność opiera się na innowacyjnym pomyśle,",
      "Każdą spółką osobową prowadzącą działalność naukową",
      "Wyłącznie spółką akcyjną notowaną na giełdzie"
    ],
    "correct": 1,
    "explanation": "Start-up to nowo utworzone przedsiębiorstwo rozwijające działalność opartą na innowacyjnym pomyśle, modelu biznesowym lub technologii. Charakteryzuje się wysokim potencjałem wzrostu oraz poszukiwaniem skalowalnego modelu działania. Nie jest ograniczony do konkretnej formy prawnej ani rodzaju działalności."
  },
  {
    "question": "Na czym polega zasada swobody wyboru prawa właściwego zgodnie z art. 3 rozporządzenia Rzym I?",
    "answers": [
      "Umowa zawsze podlega prawu państwa, w którym wykonano usługę",
      "Umowa podlega prawu wybranemu przez strony, a wybór może dotyczyć całej umowy albo tylko jej części",
      "Prawo właściwe zawsze ustala sąd po powstaniu sporu",
      "Strony nie mogą wybrać prawa właściwego w projektach transgranicznych"
    ],
    "correct": 1,
    "explanation": "Zgodnie z art. 3 rozporządzenia Rzym I strony mogą samodzielnie wybrać prawo właściwe dla zawieranej umowy. Wybór może dotyczyć całej umowy albo tylko jej części, co zapewnia dużą elastyczność w obrocie międzynarodowym. Swoboda ta stanowi jedną z podstawowych zasad europejskiego prawa prywatnego międzynarodowego."
  },
  {
    "question": "Jakie znaczenie ma ochrona środowiska w polityce Unii Europejskiej dotyczącej projektów?",
    "answers": [
      "Dotyczy wyłącznie projektów infrastrukturalnych.",
      "Ma charakter fakultatywny dla beneficjentów.",
      "Ma znaczenie horyzontalne i powinna być uwzględniana we wszystkich projektach.",
      "Dotyczy jedynie projektów finansowanych z funduszy krajowych."
    ],
    "correct": 2,
    "explanation": "Ochrona środowiska ma charakter horyzontalny w polityce Unii Europejskiej i powinna być uwzględniana przy realizacji wszystkich projektów współfinansowanych ze środków unijnych. Oznacza to konieczność analizowania wpływu działań projektowych na środowisko niezależnie od branży czy rodzaju projektu. Zasada ta wynika z unijnej polityki zrównoważonego rozwoju."
  },
  {
    "question": "Zgodnie z ustawową definicją zrównoważonego rozwoju działania polityczne, gospodarcze i społeczne powinny być integrowane:",
    "answers": [
      "Bez uwzględniania aspektów przyrodniczych.",
      "Z zachowaniem równowagi przyrodniczej i trwałości procesów przyrodniczych.",
      "Wyłącznie na potrzeby obecnego pokolenia.",
      "Wyłącznie na poziomie lokalnym."
    ],
    "correct": 1,
    "explanation": "Ustawowa definicja zrównoważonego rozwoju zakłada integrowanie działań społecznych, gospodarczych i politycznych z zachowaniem równowagi przyrodniczej oraz trwałości procesów naturalnych. Celem jest zaspokajanie potrzeb obecnego pokolenia bez ograniczania możliwości przyszłych pokoleń. Aspekt środowiskowy stanowi integralny element tej koncepcji."
  },
  {
    "question": "Jaki jest główny cel Europejskiego Zielonego Ładu?",
    "answers": [
      "Osiągnięcie neutralności klimatycznej UE do 2050 r.",
      "Całkowita eliminacja transportu drogowego do 2030 r.",
      "Wprowadzenie obowiązkowego recyklingu wszystkich odpadów.",
      "Zastąpienie wszystkich źródeł energii energią jądrową."
    ],
    "correct": 0,
    "explanation": "Europejski Zielony Ład jest strategią Unii Europejskiej zmierzającą do osiągnięcia neutralności klimatycznej do 2050 roku. Zakłada on transformację gospodarczą, energetyczną i środowiskową państw członkowskich. Neutralność klimatyczna oznacza równowagę pomiędzy emisjami gazów cieplarnianych a ich pochłanianiem."
  },
  {
    "question": "Która z poniższych decyzji jest co do zasady wymagana przed realizacją inwestycji mogącej oddziaływać na środowisko?",
    "answers": [
      "Pozwolenie zintegrowane.",
      "Pozwolenie na emisję do powietrza.",
      "Decyzja o środowiskowych uwarunkowaniach (DŚU).",
      "Zezwolenie na zbieranie odpadów."
    ],
    "correct": 2,
    "explanation": "Decyzja o środowiskowych uwarunkowaniach jest podstawowym dokumentem wymaganym przed realizacją wielu przedsięwzięć mogących oddziaływać na środowisko. Jej celem jest ocena potencjalnych skutków inwestycji jeszcze przed rozpoczęciem procesu inwestycyjnego. Uzyskanie tej decyzji często warunkuje możliwość uzyskania dalszych zezwoleń."
  },
  {
    "question": "Zgodnie z Taksonomią UE działalność gospodarcza może zostać uznana za zrównoważoną środowiskowo, jeśli:",
    "answers": [
      "Wnosi istotny wkład w co najmniej jeden cel środowiskowy i nie wyrządza poważnych szkód pozostałym celom.",
      "Osiąga wyłącznie cele ekonomiczne.",
      "Nie podlega przepisom prawa ochrony środowiska.",
      "Powoduje wzrost emisji gazów cieplarnianych."
    ],
    "correct": 0,
    "explanation": "Zgodnie z Taksonomią UE działalność gospodarcza może zostać uznana za zrównoważoną środowiskowo tylko wtedy, gdy wnosi istotny wkład w realizację co najmniej jednego celu środowiskowego i jednocześnie nie wyrządza znaczącej szkody pozostałym celom. Dodatkowo musi spełniać określone wymogi techniczne oraz standardy społeczne. Celem tych zasad jest przeciwdziałanie zjawisku greenwashingu."
  },
  {
    "question": "Na czym polega zasada DNSH (Do No Significant Harm)?",
    "answers": [
      "Na obowiązku osiągnięcia wszystkich celów środowiskowych jednocześnie.",
      "Na zakazie realizacji inwestycji przemysłowych.",
      "Na niewyrządzaniu znaczącej szkody żadnemu z celów środowiskowych.",
      "Na obowiązku przeprowadzania OOŚ dla każdego przedsięwzięcia."
    ],
    "correct": 2,
    "explanation": "Zasada DNSH (Do No Significant Harm) oznacza obowiązek niewyrządzania znaczącej szkody żadnemu z celów środowiskowych określonych przez Unię Europejską. Projekt może wspierać jeden cel środowiskowy, ale nie może jednocześnie negatywnie wpływać na pozostałe. Zasada ta jest obowiązkowym elementem oceny wielu projektów finansowanych ze środków unijnych."
  },
  {
    "question": "Współdziałanie stron przy wykonywaniu zamówienia publicznego:",
    "answers": [
      "stanowi dobrą praktykę, ale nie jest obowiązkiem ustawowym",
      "jest obowiązkiem ustawowym",
      "jest obowiązkiem ustawowym, ale tylko przy zamówieniach o wartości powyżej 1 mln euro",
      "żadna z pozostałych odpowiedzi nie jest prawidłowa"
    ],
    "correct": 1,
    "explanation": "Współdziałanie stron przy wykonywaniu zamówienia publicznego jest obowiązkiem ustawowym wynikającym zarówno z przepisów prawa cywilnego, jak i zasad realizacji umów. Zamawiający i wykonawca powinni podejmować działania umożliwiające prawidłową realizację zobowiązania. Współpraca ta służy osiągnięciu celu zamówienia i ograniczaniu sporów."
  },
  {
    "question": "Sposób określania wysokości odsetek ustawowych za opóźnienie w spełnieniu świadczenia pieniężnego wynikającego z umowy wskazany jest w:",
    "answers": [
      "ustawie - Pzp",
      "kodeksie cywilnym",
      "ustawie o finansach publicznych",
      "ustawie o odsetkach"
    ],
    "correct": 1,
    "explanation": "Sposób ustalania wysokości odsetek ustawowych za opóźnienie został określony w Kodeksie cywilnym. Przepisy te regulują zarówno podstawę naliczania odsetek, jak i sposób ustalania ich aktualnej wysokości. Dzięki temu wierzyciel może dochodzić rekompensaty za nieterminowe spełnienie świadczenia pieniężnego."
  },
  {
    "question": "Z żądaniem zmiany wysokości lub sposobu spełnienia świadczenia pieniężnego (tzw. waloryzacja sądowa):",
    "answers": [
      "nie może wystąpić konsument",
      "nie może wystąpić strona prowadząca przedsiębiorstwo, jeżeli świadczenie pozostaje w związku z prowadzeniem tego przedsiębiorstwa",
      "może wystąpić strona prowadząca przedsiębiorstwo, jeżeli świadczenie pozostaje w związku z prowadzeniem tego przedsiębiorstwa",
      "może wystąpić wyłącznie wykonawca wykluczony z udziału w postępowaniu"
    ],
    "correct": 1,
    "explanation": "Z żądaniem waloryzacji sądowej nie może wystąpić strona prowadząca przedsiębiorstwo, jeżeli świadczenie pozostaje w związku z prowadzoną działalnością gospodarczą. Ograniczenie to wynika z założenia, że profesjonalni uczestnicy obrotu gospodarczego powinni samodzielnie uwzględniać ryzyko zmian gospodarczych. Przepis chroni stabilność stosunków gospodarczych."
  },
  {
    "question": "W świetle kodeksu cywilnego wskutek upływu terminu przedawnienia:",
    "answers": [
      "dłużnik może uchylić się od spełnienia świadczenia",
      "przedawnione roszczenie wygasa",
      "sąd zwraca uwagę stronom na fakt przedawnienia",
      "sąd wzywa dłużnika do zajęcia stanowiska w kwestii przedawnienia"
    ],
    "correct": 0,
    "explanation": "Upływ terminu przedawnienia nie powoduje wygaśnięcia roszczenia, lecz daje dłużnikowi możliwość uchylenia się od jego spełnienia poprzez podniesienie zarzutu przedawnienia. Roszczenie nadal istnieje, ale jego skuteczne dochodzenie staje się ograniczone. Instytucja ta służy zapewnieniu pewności obrotu prawnego."
  },
  {
    "question": "Umowa w sprawie zamówienia publicznego wymaga zachowania formy:",
    "answers": [
      "aktu notarialnego",
      "pisemnej, a na wniosek wykonawcy – aktu notarialnego",
      "wyłącznie formy elektronicznej",
      "żadna z powyższych odpowiedzi nie jest prawidłowa"
    ],
    "correct": 3,
    "explanation": "Ustawa Prawo zamówień publicznych nie przewiduje jednej z form wskazanych w odpowiedziach jako obowiązkowej dla wszystkich umów w sprawie zamówienia publicznego. Dlatego prawidłowa jest odpowiedź wskazująca, że żadna z pozostałych propozycji nie jest prawidłowa. Ocena wymaga znajomości szczegółowych przepisów dotyczących formy zawierania umów."
  },
  {
    "question": "Do umów w sprawach zamówień publicznych:",
    "answers": [
      "nie stosuje się przepisów kodeksu cywilnego",
      "stosuje się przepisy kodeksu cywilnego tylko w tych przypadkach, w których ustawa – Pzp to przewiduje",
      "stosuje się przepisy kodeksu cywilnego, o ile ustawa – Pzp nie stanowi inaczej",
      "żadna z pozostałych odpowiedzi nie jest prawidłowa"
    ],
    "correct": 2,
    "explanation": "Do umów w sprawach zamówień publicznych stosuje się przepisy Kodeksu cywilnego, o ile ustawa Prawo zamówień publicznych nie stanowi inaczej. Oznacza to, że regulacje Pzp mają charakter szczególny wobec ogólnych przepisów prawa cywilnego. W zakresie nieuregulowanym zastosowanie znajdują zasady wynikające z Kodeksu cywilnego."
  },
  {
    "question": "W razie zaistnienia nadzwyczajnej zmiany stosunków tzw. klauzula rebus sic stantibus (art. 3571 k.c.) stanowi podstawę do:",
    "answers": [
      "odstąpienia od umowy przez wykonawcę",
      "wypowiedzenia umowy przez zamawiającego",
      "wystąpienia do sądu z żądaniem modyfikacji umowy",
      "żądania kary umownej"
    ],
    "correct": 2,
    "explanation": "Klauzula rebus sic stantibus pozwala stronie wystąpić do sądu z żądaniem zmiany sposobu wykonania zobowiązania, wysokości świadczenia lub nawet rozwiązania umowy, jeżeli nastąpiła nadzwyczajna zmiana stosunków. Celem tej instytucji jest przywrócenie równowagi kontraktowej w wyjątkowych sytuacjach. Decyzję podejmuje jednak sąd po analizie okoliczności sprawy."
  },
  {
    "question": "Wykonawca może żądać zmniejszenia kary umownej (tzw. miarkowanie kary umownej) m.in. w sytuacji, gdy:",
    "answers": [
      "zobowiązanie zostało w znacznej części wykonane",
      "ogłoszona została upadłość wykonawcy",
      "ogłoszona została upadłość zamawiającego",
      "żadna z pozostałych odpowiedzi nie jest prawidłowa"
    ],
    "correct": 0,
    "explanation": "Miarkowanie kary umownej jest możliwe między innymi wtedy, gdy zobowiązanie zostało wykonane w znacznej części. Sąd może wówczas uznać, że pełna wysokość kary byłaby nadmierna i nieproporcjonalna do rzeczywistego naruszenia. Instytucja ta chroni przed nieuzasadnionym obciążeniem dłużnika."
  },
  {
    "question": "Odsetki za opóźnienie w spełnieniu świadczenia pieniężnego przez dłużnika należą się wierzycielowi:",
    "answers": [
      "tylko wtedy, gdy opóźnienie było zawinione",
      "tylko wtedy, gdy odsetki za opóźnienie były przewidziane w umowie",
      "tylko wtedy, gdy odsetki zostały zasądzone przez sąd",
      "w każdym przypadku opóźnienia"
    ],
    "correct": 3,
    "explanation": "Odsetki za opóźnienie należą się wierzycielowi w każdym przypadku opóźnienia w spełnieniu świadczenia pieniężnego, niezależnie od winy dłużnika. Nie jest konieczne wcześniejsze zastrzeżenie ich w umowie ani wydanie wyroku przez sąd. Wystarczający jest sam fakt nieterminowego wykonania zobowiązania."
  },
  {
    "question": "W świetle kodeksu cywilnego kara umowna może być zmniejszona (tzw. miarkowanie kary umownej) m.in. w przypadku, gdy:",
    "answers": [
      "zobowiązanie zostało w znacznej części wykonane",
      "zobowiązanie zostało w całości wykonane",
      "kara umowna została zastrzeżona na wypadek niewykonania zobowiązania pieniężnego",
      "kara umowna jest sprzeczna z przepisami ustawy Prawo zamówień publicznych"
    ],
    "correct": 0,
    "explanation": "Kara umowna może zostać zmniejszona między innymi wtedy, gdy zobowiązanie zostało w znacznej części wykonane. Sąd ocenia wówczas proporcjonalność kary w stosunku do stopnia naruszenia umowy. Celem miarkowania jest zapobieganie sytuacjom, w których kara prowadziłaby do nieuzasadnionego wzbogacenia wierzyciela."
  },
  {
    "question": "Dokonanie zmiany umowy o zamówienie publiczne w sposób sprzeczny z ustawą:",
    "answers": [
      "stanowi naruszenie dyscypliny finansów publicznych",
      "stanowi przestępstwo skarbowe",
      "stanowi wykroczenie skarbowe",
      "stanowi przestępstwo udaremnienia przetargu publicznego"
    ],
    "correct": 0,
    "explanation": "Dokonanie zmiany umowy o zamówienie publiczne z naruszeniem przepisów może stanowić naruszenie dyscypliny finansów publicznych. Odpowiedzialność wynika z obowiązku prawidłowego gospodarowania środkami publicznymi oraz przestrzegania procedur przewidzianych przez ustawę. Naruszenie tych zasad może skutkować sankcjami wobec osób odpowiedzialnych za podjęte działania."
  }
];