import { renderOrderSummary } from "../../scripts/checkout/orderSummary";

describe('test suite: renderOrderSummary', () => {
    it('displays the cart', () => {
        document.querySelector('.js-test-container').innerHTML = `<div class="js-order-summary">
            
        </div>`;
    });
});