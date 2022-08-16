sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller,JSONModel) {
	"use strict";
	
	return Controller.extend("arggerationModel.controller.View1", {
		onInit:function(){
			var companyModel = new JSONModel();
			companyModel.loadData("model/company.json");
			this.getView().setModel(companyModel);
			
		}

	});
});