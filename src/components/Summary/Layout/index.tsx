import React from "react";
import Image from "next/image";

import { ISummaryLayout } from "../data";
import { income, outcome } from "@/assets";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import styles from "./styles.module.scss"

export const Summary: React.FC<ISummaryLayout> = ({ summary }) => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={20}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <div className={styles.card}>
            <span>
              <p>Entradas</p>
              <Image src={income} alt="Entradas" />
            </span>
            <strong>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(summary.deposits / 100)}
            </strong>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.card}>
            <span>
              <p>Saídas</p>
              <Image src={outcome} alt="Saídas" />
            </span>
            <strong>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(summary.withdraw / 100)}
            </strong>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles[summary.total >= 0 ? "highlight" : "lowlight"]}>
            <span>
              <p>Total</p>
            </span>
            <strong>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(summary.total / 100)}
            </strong>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
