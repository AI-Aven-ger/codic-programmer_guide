   if(localStorage.theme==="light"){document.body.classList.add("light")}
function toggleTheme(){
  document.body.classList.toggle("light");
  localStorage.theme=document.body.classList.contains("light")?"light":"dark";
}
function toggleSidebar(){
  document.getElementById("sidebar").classList.toggle("show");
}


// Копирование кода эмодзи 📋
function addCopyButtons(){
  document.querySelectorAll('pre').forEach(block=>{
    if(!block.querySelector('.copy-btn')){
      const btn = document.createElement('button');
      btn.innerText = '📋';
      btn.className = 'copy-btn';
      btn.onclick = ()=>{
        navigator.clipboard.writeText(block.innerText.replace('📋',''));
        btn.innerText='✅';
        setTimeout(()=>btn.innerText='📋',1000);
      };
      block.appendChild(btn);
    }
  });
}

// Анимация появления секций
function showSections(){
  document.querySelectorAll('.section').forEach((sec,i)=>{
    setTimeout(()=>sec.classList.add('show'), i*100);
  });
}

// Генерация кода и секций
function codeBlock(code,lang){return `<pre><code class="${lang}">${code}</code></pre>`}
function section(title,text,code,explain,lang){return `<div class="section"><h2>${title}</h2><p>${text}</p>${codeBlock(code,lang)}<p><b>Объяснение:</b> ${explain}</p></div>`}
function books(title,list){return `<div class="section"><h2>${title}</h2><p>Рекомендуемые книги:</p><pre><code>${list}</code></pre></div>`}

// Открытие языка с полными примерами
function openLang(lang){
  if(window.innerWidth<700) toggleSidebar();
  const content=document.getElementById("content")
  let html=""

  // ---------------- Python ----------------
  if(lang==="python"){
    html+=section("Введение","Python — высокоуровневый язык программирования, созданный Гвидо ван Россумом в 1991 году. Главная цель языка — читаемость и простота. Python используется как новичками, так и крупными компаниями (Google, NASA, Netflix). Он поддерживает несколько парадигм: процедурное, объектно-ориентированное и функциональное программирование. Благодаря огромному количеству библиотек Python стал стандартом в анализе данных, искусственном интеллекте и автоматизации.","print('Hello World')","Выводит 'Hello World' в консоль.","python")
    html+=section("Переменные","Переменные хранят данные разных типов: числа, строки, списки и словари.","x=10\ny=5\nprint(x+y)","Складывает 10+5 и выводит результат.","python")
    html+=section("Условия","Условные операторы if/else позволяют выполнять код в зависимости от условий.","age=18\nif age>=18:\n print('Adult')","Проверка возраста и вывод строки.","python")
    html+=section("Циклы","Циклы for и while повторяют действия несколько раз.","for i in range(5):\n print(i)","Выводит числа 0-4.","python")
    html+=section("Функции","Функции объединяют код для повторного использования.","def greet(name):\n print('Hello',name)\ngreet('Alex')","Вызывает функцию и выводит приветствие.","python")
    html+=books("📚 Книги","1. Python Crash Course\n2. Automate the Boring Stuff\n3. Fluent Python\n4. Learning Python")
  }

  // ---------------- JavaScript ----------------
  if(lang==="js"){
    html+=section("Введение","JavaScript — основной язык веб-разработки. Он выполняется прямо в браузере и делает сайты интерактивными. Сегодня JavaScript работает не только на клиенте, но и на сервере благодаря Node.js. Практически каждый сайт в интернете использует JavaScript.","console.log('Hello World')","Вывод текста в консоль браузера.","javascript")
    html+=section("Переменные","let, const, var позволяют создавать переменные с разным поведением.","let x=5;\nconst y=10;\nconsole.log(x+y)","Вывод суммы двух чисел.","javascript")
    html+=section("Условия","if/else для проверки условий и управления потоком программы.","let age=18;\nif(age>=18){console.log('Adult')}","Проверяет возраст и выводит результат.","javascript")
    html+=section("Циклы","for и while позволяют повторять действия.","for(let i=0;i<5;i++){console.log(i)}","Выводит 0-4 в консоль.","javascript")
    html+=section("Функции","Функции помогают переиспользовать код многократно.","function greet(name){console.log('Hi',name)}\ngreet('Alex')","Вызывает функцию и выводит приветствие.","javascript")
    html+=books("📚 Книги","1. Eloquent JavaScript\n2. You Don't Know JS\n3. JavaScript: The Definitive Guide\n4. JavaScript Good Parts")
  }

   // ---------------- Java ----------------
  if(lang==="java"){
    html+=section("Введение","Java — строго типизированный объектно-ориентированный язык, созданный компанией Sun Microsystems. Его главный принцип: Write Once, Run Anywhere. Java работает через виртуальную машину JVM, что делает программы кроссплатформенными.","public class Main{\n public static void main(String[] args){\n  System.out.println('Hello');\n }\n}","Выводит Hello в консоль.","java")
    html+=section("Переменные","Переменные в Java имеют тип и имя, используются для хранения данных.","int x=5;\nString y='Hi';\nSystem.out.println(x+y);","Объединяет число и строку, выводит результат.","java")
    html+=section("Условия","if/else управляют логикой выполнения кода.","int age=18;\nif(age>=18){System.out.println('Adult');}","Выводит Adult, если age>=18.","java")
    html+=section("Циклы","for и while для повторения блоков кода.","for(int i=0;i<5;i++){System.out.println(i);}","Выводит 0-4 в консоль.","java")
    html+=section("Функции","Методы позволяют объединять повторяющийся код. Примечание: начиная с этого языка, используйте двойные кавычки, потому что одинарные кавычки зачастую это другой тип данных.","public static void greet(String name){System.out.println('Hello '+name);}\ngreet('Alex');","Выводит Hello Alex.","java")
    html+=books("📚 Книги","1. Head First Java\n2. Effective Java\n3. Java Complete Reference\n4. Thinking in Java")
  }
  // ---------------- C/C++ ----------------
  if(lang==="c"){
    html+=section("Введение","C и C++ — языки низкого уровня, позволяющие напрямую управлять памятью и железом компьютера. Они используются там, где важна максимальная производительность.","#include <stdio.h>\nint main(){printf('Hello'); return 0;}","Выводит Hello.","c")
    html+=section("Переменные","Переменные хранят данные определённого типа.","int x=5;\nfloat y=3.2;\nprintf('%d %f',x,y);","Выводит 5 3.2","c")
    html+=section("Условия","if/else позволяет проверять условия и управлять потоком выполнения.","int age=18;\nif(age>=18){printf('Adult');}","Выводит Adult если age>=18.","c")
    html+=section("Циклы","for/while циклы для повторения кода.","for(int i=0;i<5;i++){printf('%d',i);}","Выводит 0-4.","c")
    html+=section("Функции","Функции позволяют переиспользовать код.","int sum(int a,int b){return a+b;}\nprintf('%d',sum(2,3));","Выводит 5.","c")
    html+=books("📚 Книги","1. The C Programming Language\n2. C Programming Absolute Beginner\n3. C++ Primer\n4. Effective C++")
  }
  // ---------------- Go ----------------
  if(lang==="go"){
    html+=section("Введение","Go (Golang) — язык от Google, созданный для простоты, скорости и работы с сетевыми сервисами. Он сочетает производительность C и простоту Python.","package main\nimport 'fmt'\nfunc main(){fmt.Println('Hello')}","Выводит Hello","go")
    html+=section("Переменные","Переменные определяются с типом и именем.","var x int=5\nfmt.Println(x)","Выводит 5","go")
    html+=section("Условия","if/else проверяет условия.","age:=18\nif age>=18{fmt.Println('Adult')}","Выводит Adult","go")
    html+=section("Циклы","for циклы повторяют блоки кода.","for i:=0;i<5;i++{fmt.Println(i)}","Выводит 0-4","go")
    html+=section("Функции","Функции объединяют код.","func greet(name string){fmt.Println('Hello',name)}\ngreet('Alex')","Выводит Hello Alex","go")
    html+=books("📚 Книги","1. The Go Programming Language\n2. Go in Action\n3. Learning Go\n4. Introducing Go")
  }
  // ---------------- PHP ----------------
  if(lang==="php"){
    html+=section("Введение","PHP — серверный язык, специально созданный для веб-разработки. Он генерирует HTML на сервере и отправляет готовую страницу пользователю.","&lt;?php\n echo 'Hello';\n?&gt; ","Выводит: Hello","php")
    html+=section("Переменные","$x = 5; переменные всегда начинаются с $","$x=10;\n$y=20;\necho $x+$y;","Выводит 30","php")
    html+=section("Условия","if/else проверяет условия.","$age=18;\nif($age>=18){echo 'Adult';}","Выводит Adult","php")
    html+=section("Циклы","for/while циклы для повторений","for($i=0;$i<5;$i++){echo $i;}","Выводит 0-4","php")
    html+=section("Функции","Функции объединяют код","function greet($name){echo 'Hello '.$name;}\ngreet('Alex');","Выводит Hello Alex","php")
    html+=books("📚 Книги","1. PHP & MySQL Web Development\n2. Learning PHP, MySQL & JavaScript\n3. PHP Cookbook\n4. Modern PHP")
  }


  // Можно добавить остальные языки аналогично...

  content.innerHTML=html
  hljs.highlightAll();
  addCopyButtons();
  showSections();
}

// Поиск по языкам
document.getElementById('searchBar').addEventListener('input', function(){
  const val = this.value.toLowerCase();
  document.querySelectorAll('.chat-item').forEach(item=>{
    item.style.display = item.textContent.toLowerCase().includes(val) ? 'flex' : 'none';
  });
});

// Подключение клика по языкам
document.querySelectorAll('.chat-item').forEach(item=>{
  item.addEventListener('click', ()=> openLang(item.dataset.lang));
});
