// Считываем параметры из командной строки
var arguments;
arguments = WScript.Arguments;

// Записываем в соответствующие переменные
path = arguments(0);
minSize = arguments(1);
maxSize = arguments(2);

// Создание файла, получение каталога
var fso, list;
fso = WScript.CreateObject("Scripting.FileSystemObject");
list = fso.CreateTextFile("C:\\Users\\Maryo\\Desktop\\test\\list.txt", true);
ShowSubFolders(fso.GetFolder(path));
   
function ShowSubFolders (path)
{
   var files, subFold;
   files = new Enumerator(path.files);
   subFold = new Enumerator(path.SubFolders);
   
   for (; !files.atEnd(); files.moveNext()) // Проверяем файлы на соответствие условию
   {
	   if(files.item().size >= minSize && files.item().size <= maxSize)
	   {
		   WScript.Echo(files.item().name);
		   list.WriteLine(files.item().name);
	   }
   }
   
   for (; !subFold.atEnd(); subFold.moveNext()) { // Рекурсивно вызываем ф-ю для следующего объекта в коллекции подпапок
	   ShowSubFolders (subFold.item());
   }
}