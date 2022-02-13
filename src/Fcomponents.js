import React from 'react';
import star from './star-icon.svg';
import starblue from './star-icon-blue.svg';

export default function Fcomponents() {
  return (
    <div class="list">
      <div class="list__item">
        <div class="list__wrap">
          <div class="list__image-holder">
            <img src={star} className="list__svg list__svg--level-one" alt="Icon star"/>
          </div>
          <p class="list__title">Level 1</p>
        </div>
        <div class="holder">
          <p class="holder__title">Requirements</p>
          <ul class="holder__list holder__list--level-one">
            <li class="holder__item">
              <label class="holder__label" for="email">
                <input class="holder__input holder__input--level-one visually-hidden" type="checkbox" id="email" name="checkbox" checked/>
                <span class="holder__span">Confirm e-mail</span>
                <span class="holder__checkmark"></span>
              </label>
            </li>
            <li class="holder__item">
              <label class="holder__label" for="phone">
                <input class="holder__input holder__input--level-one visually-hidden" type="checkbox" id="phone" name="checkbox" checked/>
                <span class="holder__span">Confirm phone number</span>
                <span class="holder__checkmark"></span>
              </label>
            </li>
            <li class="holder__item">
              <label class="holder__label" for="personal-details">
                <input class="holder__input holder__input--level-one visually-hidden" type="checkbox" id="personal-details" name="checkbox" checked/>
                <span class="holder__span">Enter personal details</span>
                <span class="holder__checkmark"></span>
              </label>
            </li>
          </ul>
          <p class="holder__text">Annual turnover - up to 2.500 <span>Eur</span></p>
        </div>
      </div>
      <div class="list__item list__item--level-two">
        <div class="list__wrap">
          <div class="list__image-holder list__image-holder--level-two">
            <img src={starblue} className="list__svg list__svg--level-two" alt="Icon star"/>
          </div>
          <p class="list__title">Level 2</p>
        </div>
        <div class="holder">
          <p class="holder__title">Requirements</p>
          <ul class="holder__list holder__list--level-two">
            <li class="holder__item">
              <label class="holder__label" for="photo-id">
                <input class="holder__input holder__input--level-two visually-hidden" type="checkbox" id="photo-id" name="checkbox"/>
                <span class="holder__span">Upload photo ID</span>
                <span class="holder__checkmark"></span>
              </label>
            </li>
            <li class="holder__item">
              <label class="holder__label" for="bill">
                <input class="holder__input holder__input--level-two visually-hidden" type="checkbox" id="bill" name="checkbox"/>
                <span class="holder__span">Upload utility bill</span>
                <span class="holder__checkmark"></span>
              </label>
            </li>
          </ul>
          <p class="holder__text">Annual turnover - up to 30.000 <span>Eur</span></p>
        </div>
      </div>
    </div>
  )
}
