PGDMP                          z           tickets    14.2    14.2 	    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16395    tickets    DATABASE     k   CREATE DATABASE tickets WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE tickets;
                postgres    false            �            1259    16412 
   users_data    TABLE     C  CREATE TABLE public.users_data (
    firstname text NOT NULL,
    lastname text NOT NULL,
    birthdate text NOT NULL,
    phone text,
    email text NOT NULL,
    state text,
    postal text,
    df text,
    dt text,
    timeflight text,
    cardtype text,
    card text,
    carxexpdate text,
    cardlastdigits text
);
    DROP TABLE public.users_data;
       public         heap    postgres    false            �            1259    27627 
   users_logs    TABLE     �  CREATE TABLE public.users_logs (
    email character varying,
    password character varying,
    repeat_password character varying,
    firstname character varying,
    lastname character varying,
    address character varying,
    addressno character varying,
    phone character varying,
    state character varying,
    postal character varying,
    cardtype character varying,
    card character varying
);
    DROP TABLE public.users_logs;
       public         heap    postgres    false            �          0    16412 
   users_data 
   TABLE DATA           �   COPY public.users_data (firstname, lastname, birthdate, phone, email, state, postal, df, dt, timeflight, cardtype, card, carxexpdate, cardlastdigits) FROM stdin;
    public          postgres    false    209   "       �          0    27627 
   users_logs 
   TABLE DATA           �   COPY public.users_logs (email, password, repeat_password, firstname, lastname, address, addressno, phone, state, postal, cardtype, card) FROM stdin;
    public          postgres    false    210   �       `           2606    16418    users_data users_data_pkey 
   CONSTRAINT     {   ALTER TABLE ONLY public.users_data
    ADD CONSTRAINT users_data_pkey PRIMARY KEY (firstname, lastname, birthdate, email);
 D   ALTER TABLE ONLY public.users_data DROP CONSTRAINT users_data_pkey;
       public            postgres    false    209    209    209    209            �   �  x����n�0���l'@`J�XQub�bC��%&���>O�vh��zNH�|�#���8J������8T8�����a�z�z�\�õ���>?W�,��Pe��/A�'a���'RK�SoD)LD�e2�؉�J2t�KVBc;��ҏ�v�_,�
[����`!�-fm
�#��T��2kO������+쟋�������W�Q������+���.�:,�W�pH��/���W \�G0���hvޫ�L����)��x�&��`�6U���Z�V���V���E����k�y`S�W�E��8��r{����b���f3�+��q��X�p-���Q0����f� s/�$��9�s9�M��:dY�g�cwvx*��BX��1��mԬ*#]B�/�@v      �   e  x��R�n�0=���T������6����K�D�%�h?6��e��8�c,�=c `(�9Zۗ�9!k�R ��[4WI��c�	��ԍ�6�*�`q�B��@��CJ����P�F;���c��.�×&q췔��u�X�&4N��c%J�e�q	]'��F���;f��Q�>;�L4��O�t���$At�it�Umu�ېT�j��7�7h�LyK.!�	oVk7�X��׽��p��8��_�|�/�����������]X��L�D'V's);;8�y��4�K��"�17�l2���N8�0�6h�l���ß�������S��rsz��܈��o�uo,y�5W�����x�*�     