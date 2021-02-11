"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductStatusValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const products_model_1 = require("../products.model");
class ProductStatusValidationPipe {
    constructor() {
        this.allowedStatuses = [
            products_model_1.ProductStatus.OPEN,
            products_model_1.ProductStatus.IN_PROGRESS,
            products_model_1.ProductStatus.DONE,
        ];
    }
    transform(value, metadata) {
        value = value.toUpperCase();
        if (!this.isStatusValid(value)) {
            throw new common_1.BadRequestException('"${value}" is an invalid status.');
        }
        return value;
    }
    isStatusValid(status) {
        const idx = this.allowedStatuses.indexOf(status);
        return idx !== -1;
    }
}
exports.ProductStatusValidationPipe = ProductStatusValidationPipe;
//# sourceMappingURL=product-status-validation.pipe.js.map