//
//  Info.swift
//  AnimalsDatabaseRealm
//
//  Created by Quadref on 22.04.2019.
//  Copyright © 2019 Quadref. All rights reserved.
//

import UIKit
import RealmSwift

class Info: Object {
    
    @objc dynamic var name = ""
    @objc dynamic var eat = ""
    @objc dynamic var view = ""
    @objc dynamic var years = 0
    @objc dynamic var gender = ""
    @objc dynamic var complate = false
    
    required convenience init(name: String, view: String, eat: String, years: Int, gender: String) {
        
        self.init()
        self.name = name
        self.view = view
        self.eat = eat
        self.years = years
        self.gender = gender
        
    }
    
}
