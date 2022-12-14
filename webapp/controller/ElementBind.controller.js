sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("arggerationModel.controller.ElementBind", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf arggerationModel.view.ElementBind
		 */
		onInit: function() {
			var empModel = new JSONModel();
			empModel.loadData("model/emp.json");
			this.getView().setModel(empModel);

		},
		onSelectionChange: function(oEvent) {
			var oSelectedItem = oEvent.getParameters().selectedItem;
			var sPath = oSelectedItem.getBindingContext().getPath();
			this.getView().byId("__list1").bindElement(sPath);
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf arggerationModel.view.ElementBind
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf arggerationModel.view.ElementBind
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf arggerationModel.view.ElementBind
		 */
		//	onExit: function() {
		//
		//	}

	});

});