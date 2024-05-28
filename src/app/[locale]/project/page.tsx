'use client';
import HeroBlog from '@components/hero/heroBlog';
import PositionRelativeHero from '@components/hero/positionRelativeHero';
import React, { FC, useState, useEffect } from 'react';
import {
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaGitlab,
  FaInstagram,
  FaLinkedinIn,
  FaMediumM,
  FaTelegramPlane,
  FaTwitter,
  FaWhatsapp,
  FaEye,
  FaGooglePlus,
  FaVimeoV,
} from 'react-icons/fa';

const Project: FC = () => {
  return (
    <>
      <HeroBlog />
      <PositionRelativeHero />
    </>
  );
};

export default Project;
