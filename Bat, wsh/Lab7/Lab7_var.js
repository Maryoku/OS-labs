// Запрос параметров
var path;
WScript.StdOut.WriteLine("Enter path to catalog: ");
path = WScript.StdIn.ReadLine();

var minSize;
WScript.StdOut.WriteLine("Enter min size of file (in bytes): ");
minSize = WScript.StdIn.ReadLine();

var maxSize;
WScript.StdOut.WriteLine("Enter max size of file (in bytes): ");
maxSize = WScript.StdIn.ReadLine();

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