//
//  AddAndDelateAnimalsViewController.swift
//  AnimalsDatabaseRealm
//
//  Created by Quadref on 22.04.2019.
//  Copyright © 2019 Quadref. All rights reserved.
//

import UIKit
import RealmSwift

class AddAndDelateAnimalsViewController: UIViewController {
    

    @IBOutlet weak var tableView: UITableView!
    @IBOutlet weak var animalTabBar: UITabBarItem!
    
    let realm = try! Realm() //Доступ к хранилищу
    var itemsArray: Results<Animals>! // Массив для хранения записей
    
    var cellId = "Cell" // Идентификатор ячейки
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        navigationItem.rightBarButtonItem = UIBarButtonItem(title: "Добавить", style: .plain, target: self, action: #selector(addItem)) // Вызов метода для кнопки
        
        // Присваиваем ячейку для TableView с иднетифиактором "Cell"
        tableView.register(UITableViewCell.self, forCellReuseIdentifier: cellId)
        
        itemsArray = realm.objects(Animals.self)
        
    }
    
    @objc func addItem(_ sender: AnyObject) {
        
        addAlertForNewItem()
    }
    
    func addAlertForNewItem() {
        
        // Создание алёрт контроллера
        let alert = UIAlertController(title: "Новое животное!", message: "Добавьте новое животное", preferredStyle: .alert)
        
        // Создание текстового поля
        var alertTextField: UITextField!
        alert.addTextField { textField in
            alertTextField = textField
            textField.placeholder = "Название"
    
        }
        
        var alertTextField_: UITextField!
        alert.addTextField { textField in
            alertTextField_ = textField
            textField.placeholder = "Местоположение"
        }
        
        // Создание кнопки для сохранения новых значений
        let saveAction = UIAlertAction(title: "Добавить", style: .default) { action in
            
            // Проверяем не является ли текстовое поле пустым
            guard let textName = alertTextField.text , !textName.isEmpty else { return }
            guard let textView = alertTextField_.text , !textView.isEmpty else { return }

            let animal = Animals()
            animal.name = textName
            animal.view = textView
            
            try! self.realm.write {
                self.realm.add(animal)
            }
            

            // Обновляем таблицу
            
//            self.tableView.beginUpdates()
//            self.tableView.reloadData()
//            self.tableView.endUpdates()
            
            self.tableView.reloadSections(IndexSet.init(integer: 0), with: .automatic)
//            self.tableView.insertRows(at: [IndexPath.init(row: self.itemsArray.count - 1, section: 0)], with: .automatic)
        }
        
        // Создаем кнопку для отмены ввода новой задачи
        let cancelAction = UIAlertAction(title: "Отмена", style: .destructive, handler: nil)
        
        alert.addAction(saveAction) // Присваиваем алёрту кнопку для сохранения результата
        alert.addAction(cancelAction) // Присваиваем алерут кнопку для отмены ввода новой задачи
        
        present(alert, animated: true, completion: nil) // Вызываем алёрт контроллер
    }
    
}

extension AddAndDelateAnimalsViewController: UITableViewDelegate, UITableViewDataSource {
    
    //MARK: Table View Data Source
    
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        
        if itemsArray.count != 0 {
            return itemsArray.count
        }
        return 0
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: cellId, for: indexPath)
        let item = itemsArray[indexPath.row]
        cell.textLabel?.text = "\(item.name) \(item.view)"
        return cell
    }
    
    //MARK: Table View Delegate
    
    func tableView(_ tableView: UITableView, editActionsForRowAt indexPath: IndexPath) -> [UITableViewRowAction]? {
        
        let editingRow = itemsArray[indexPath.row]
        
        let deleteAction = UITableViewRowAction(style: .default, title: "Delete") { _,_ in
            try! self.realm.write {
                self.realm.delete(editingRow)
            }
            self.tableView.reloadSections(IndexSet.init(integer: 0), with: .automatic)
        }
        
        return [deleteAction]
    }
    
    //Вызов другого контроллера
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let hg = InfoViewController()
        self.navigationController?.pushViewController(hg, animated: true)
    }
}
