"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var ModalOverlay = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.16);\n  z-index: 999;\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.16);\n  z-index: 999;\n"])));
var Modal = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: auto;\n  border-radius: ", ";\n  background-color: ", ";\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n  z-index: 1000;\n"], ["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: auto;\n  border-radius: ",
    ";\n  background-color: ",
    ";\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n  z-index: 1000;\n"])), function (props) {
    return props.borderRadius ? props.borderRadius : "10px";
}, function (props) {
    return props.bgColor ? props.bgColor : "#ffffff";
});
exports.ModalTemplate = function (_a) {
    var children = _a.children, isVisible = _a.isVisible, handleModalInactive = _a.handleModalInactive, bgColor = _a.bgColor, borderRadius = _a.borderRadius;
    return (React.createElement(Container, null, isVisible && (React.createElement(React.Fragment, null,
        React.createElement(ModalOverlay, { onClick: handleModalInactive }),
        React.createElement(Modal, { bgColor: bgColor, borderRadius: borderRadius }, children)))));
};
var templateObject_1, templateObject_2, templateObject_3;
