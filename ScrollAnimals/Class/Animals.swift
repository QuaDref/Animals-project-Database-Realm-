//
//  Animals.swift
//  AnimalsDatabaseRealm
//
//  Created by Quadref on 22.04.2019.
//  Copyright © 2019 Quadref. All rights reserved.
//

import UIKit
import RealmSwift

class Animals: Object{
    
    @objc dynamic var name = ""
    @objc dynamic var view = ""
    @objc dynamic var complate = false
    
    required convenience init(name: String, view: String) {
        self.init()
        self.name = name
        self.view = view
    }
    
    
}
